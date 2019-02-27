'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [...Array(10)].map((_, i) => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.exampleEmail(),
        password: faker.internet.password(14),
        phone: faker.phone.phoneNumberFormat(2),
        type: faker.random.arrayElement(['doctor', 'patient']),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );

    const patients = await queryInterface.sequelize.query(
      `SELECT id from USERS where type='patient';`,
    );

    const patientRows = patients[0].map(user => ({
      age: faker.random.number({ min: 21, max: 80 }),
      address: faker.address.streetAddress('###'),
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return await queryInterface.bulkInsert('Patients', patientRows, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  },
};
