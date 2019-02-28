const { Patient, User } = require('../../db/models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { age, firstName, lastName, email, phone, address } = req.body;
  const patient = await Patient.findOne({
    where: { id },
  });

  console.log('\n\npatient\n\n', patient);

  console.log('\n\nuser\n\n', await patient.User);

  if (!patient) {
    return res.status(404).json({ patient: null });
  }

  try {
    await patient.update({
      age,
      address,
    });
    await patient.User.update({
      firstName,
      lastName,
      email,
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ status: 'Bad Request' });
  }

  return res.json({ status: 'updated' });
};
