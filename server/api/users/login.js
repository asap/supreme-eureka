const faker = require('faker');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  console.log('username', username);
  console.log('password', password);

  const user = ({
    id: faker.random.uuid(),
    emailAddress: faker.internet.exampleEmail(),
    // type: 'patient',
    type: 'doctor',
  });

  // return res.status(404).json({
  //   status: "notFound",
  //   message: "User not found",
  // })

  return res.json({
    user,
  });
};
