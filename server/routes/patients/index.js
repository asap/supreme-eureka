const { Router } = require('express');

const {
  getAllPatients,
  getPatientById,
  updatePatientById,
} = require('../../api/patients');

const router = Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatientById);

module.exports = router;
