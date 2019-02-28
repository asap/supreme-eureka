const faker = require('faker');

const { User, Patient, Doctor } = require('../../db/models');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  // TODO: Add better validation
  if (!username && !password) {
    return res.status(401).json({
      status: 'bad_request',
      message: 'username and password are required',
    });
  }

  const user = await User.findOne({
    where: {
      email: username,
    },
  });

  console.log("found user", user);

  if (await user.validPassword(password)) {
    let result;

    console.log("I'm here");

    // TODO: Move this to the user object?
    if (user.type === 'patient') {
    console.log("here ???");
      result = await Patient.findOne({ where: { userId: user.id }});
      // result = await user.getPatient();
    } else if (user.type === 'doctor') {
    console.log("here !!!");
      result = await Doctor.findOne({ where: { userId: user.id }});
      // result = await user.getDoctor();
    }
    // TODO: Should bail if type isn't one of these

    console.log("now here");

    console.log("result",  result);
    return res.json({
      user: result.flattenJSON(),
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
