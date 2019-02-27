const faker = require('faker');

const { Patient, User } = require('../../db/models');

module.exports = async (req, res, next) => {
  // The controller is "flattening" the Patient/User
  // association to simplify the resource for consumers
  // Ideally, this might be done in an Entity Model
  // rather than in the DB model or a controller
  // Also, we should not return the password for
  // a user, obviously!

  const patients = await Patient.findAll();

  const patientsList = patients.map(patient => patient.flattenJSON());

  return res.json({ patients: patientsList });
};
