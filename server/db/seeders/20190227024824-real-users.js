'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Leonard',
          lastName: 'McCoy',
          email: 'drmccoy@ufp.gov',
          password: await bcrypt.hash('bones', bcrypt.genSaltSync(8)),
          phone: faker.phone.phoneNumberFormat(2),
          type: 'doctor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Montgomery',
          lastName: 'Scott',
          email: 'scotty@ufp.gov',
          password: await bcrypt.hash('morepower', bcrypt.genSaltSync(8)),
          phone: faker.phone.phoneNumberFormat(2),
          type: 'patient',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    const mccoy = await queryInterface.sequelize.query(
      `SELECT id from USERS where email='drmccoy@ufp.gov'`,
    );

    const scotty = await queryInterface.sequelize.query(
      `SELECT id from USERS where email='scotty@ufp.gov'`,
    );

    const doctorRows = mccoy[0].map(user => ({
      hospital: faker.company.companyName(0),
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const patientRows = scotty[0].map(user => ({
      age: faker.random.number({ min: 21, max: 80 }),
      address: faker.address.streetAddress('###'),
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Doctors', doctorRows, {});
    return await queryInterface.bulkInsert('Patients', patientRows, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});
    return queryInterface.bulkDelete('Patients', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  },
};
