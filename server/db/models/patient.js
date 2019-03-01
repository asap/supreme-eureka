'use strict';

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      defaultScope: {
        include: {
          all: true,
          nested: true,
        },
      },
    },
  );
  Patient.associate = function(models) {
    // associations can be defined here

    Patient.belongsTo(models.User);
  };
  Patient.prototype.flattenJSON = function() {
    // I considered just overriding the toJSON
    // method, but I thought there might be a need
    // to have the nested JSON at some point
    return {
      id: this.id,
      age: this.age,
      firstName: this.User.firstName,
      lastName: this.User.lastName,
      email: this.User.email,
      phone: this.User.phone,
      address: this.address,
      type: this.User.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
  return Patient;
};
