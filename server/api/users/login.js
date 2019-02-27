const faker = require('faker');

const { User } = require('../../db/models');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  // TODO: Add better validation
  if (!username && !password) {
    return res.status(401).json({
      status: 'bad_request',
      message: 'username and password are required'
    });
  }

  const user = await User.find({
    where: {
      email: username,
    },
  });

  if (await user.validPassword(password)) {
    return res.json({
      user,
    });
  }

  return res.status(404).json({
    status: 'not_found',
    message: 'User not found',
  });

  // const user = ({
  //   id: faker.random.uuid(),
  //   emailAddress: faker.internet.exampleEmail(),
  //   // type: 'patient',
  //   type: 'doctor',
  // });
};
