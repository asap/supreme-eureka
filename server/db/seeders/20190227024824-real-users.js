'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Leonard',
        lastName: 'McCoy',
        email: 'drmccoy@ufp.gov',
        password: await bcrypt.hash('bones', bcrypt.genSaltSync(8)),
        type: 'doctor',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        firstName: 'Montgomery',
        lastName: 'Scott',
        email: 'scotty@ufp.gov',
        password: await bcrypt.hash('morepower', bcrypt.genSaltSync(8)),
        type: 'patient',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
