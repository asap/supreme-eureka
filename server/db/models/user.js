'use strict';

const bcrypt = require('bcrypt');

// const { Patient } = './';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      timestamps: true,
      // defaultScope: {
      //   include: {
      //     all: true,
      //     nested: true,
      //   },
      // },
    },
  );
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Patient, { as: 'patient' });
    // User.hasOne(models.Doctor);
    // User.hasOne(models.Patient);
    // User.hasOne(models.Patient, { as: 'patient', foreignKey: 'userId'});
    // User.hasOne(models.Doctor, { as: 'doctor', foreignKey: 'userId' });
    // User.hasOne(models.Patient, { as: 'patient', foreignKey: 'patientId'});
    // User.hasOne(models.Doctor, { as: 'doctor', foreignKey: 'doctorId' });
    // User.belongsTo(models.Patient);
    // User.belongsTo(models.Doctor);
    // db.User.hasOne(db.Patient);
    // db.User.hasOne(db.Doctor);
    // db.Patient.belongsTo(db.User);
    // db.Doctor.belongsTo(db.User);
  };

  User.prototype.generateHash = function(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  // User.prototype.getPatient = function () {
  //   // console.log("this", this);
  //   return this['getPatient']();
  // }

  // User.hasOne(Patient);
  return User;
};
