const faker = require('faker');

const { User, Patient, Doctor } = require('../../db/models');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      email: username,
    },
  });

  if (user && (await user.validPassword(password))) {
    let result;

    if (user.type === 'patient') {
      result = await Patient.findOne({ where: { userId: user.id } });
    } else if (user.type === 'doctor') {
      result = await Doctor.findOne({ where: { userId: user.id } });
    }

    return res.json({
      user: result.flattenJSON(),
    });
  }

  next({
    errorStatusCode: 401,
    errorMessage: 'Unauthorized',
    errorResponse: 'Username and Password are required',
  });
};
