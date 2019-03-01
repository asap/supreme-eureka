const { Patient } = require('../../db/models');

module.exports = async (req, res, next) => {
  // The controller is "flattening" the Patient/User
  // association to simplify the resource for consumers
  // Ideally, this might be done in an Entity Model
  // rather than in the DB model or a controller
  // Also, we should not return the password for
  // a user, obviously!

  const { id } = req.params;
  try {
    const patient = await Patient.findOne({
      where: { id },
    });

    if (!patient) {
      next({
        errorStatusCode: 404,
        errorMessage: 'Not Found',
        errorResponse: `Patient ${id} Not Found`,
      });
    }

    return res.json({ patient: patient.flattenJSON() });
  } catch (error) {
    next({
      errorStatusCode: 400,
      errorMessage: 'Bad Request',
      errorResponse: error,
    });
  }
};
