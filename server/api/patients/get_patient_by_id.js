const { Patient, User } = require('../../db/models');

module.exports = async (req, res, next) => {
  // The controller is "flattening" the Patient/User
  // association to simplify the resource for consumers
  // Ideally, this might be done in an Entity Model
  // rather than in the DB model or a controller
  // Also, we should not return the password for
  // a user, obviously!

  const { id } = req.params;
  const patient = await Patient.findOne({
    where: { id },
  });

  if (!patient) {
    return res.status(404).json({patient: null});
  }

  return res.json({ patient: patient.flattenJSON() });
};
