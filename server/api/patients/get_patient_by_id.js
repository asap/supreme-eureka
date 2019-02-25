const faker = require('faker');

module.exports = (req, res, next) => {
  const patient = ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.random.number({ min: 21, max: 80 }),
    emailAddress: faker.internet.exampleEmail(),
    phoneNumber: faker.phone.phoneNumberFormat(1),
    address: faker.address.streetAddress('###'),
  });

  return res.json({ patient });
};
