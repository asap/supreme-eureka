'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define(
    'Doctor',
    {
      hospital: DataTypes.STRING,
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
  Doctor.associate = function(models) {
    // associations can be defined here
    Doctor.belongsTo(models.User);
  };
  Doctor.prototype.flattenJSON = function() {
    // I considered just overriding the toJSON
    // method, but I thought there might be a need
    // to have the nested JSON at some point
    return {
      id: this.id,
      firstName: this.User.firstName,
      lastName: this.User.lastName,
      email: this.User.email,
      phone: this.User.phone,
      hospital: this.hospital,
      type: this.User.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
  return Doctor;
};
