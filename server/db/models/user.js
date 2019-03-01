'use strict';

const bcrypt = require('bcrypt');

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
    },
  );
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.generateHash = function(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8));
  };
  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
