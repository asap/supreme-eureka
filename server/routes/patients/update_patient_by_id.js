const { Patient, User } = require('../../db/models');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  // I want to explicitly define what fields I'm allowing
  // to be modified
  const { age, firstName, lastName, email, phone, address } = req.body;

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
  } catch (error) {
    next({
      errorStatusCode: 500,
      errorMessage: 'Unknown Error on fetch',
      errorResponse: error,
    });
  }

  try {
    // Update User and Patient records
    await patient.update({
      age,
      address,
    });
    await patient.User.update({
      firstName,
      lastName,
      email,
    });

    // Return updated record
    return res.json({ patient: patient.flattenJSON() });
  } catch (error) {
    next({
      errorStatusCode: 500,
      errorMessage: 'Unknown Error on update',
      errorResponse: error,
    });
  }
};
