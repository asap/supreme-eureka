const { Router } = require('express');

const getAllPatients = require('./get_all_patients');
const getPatientById = require('./get_patient_by_id');
const updatePatientById = require('./update_patient_by_id');

const router = Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatientById);

module.exports = router;
