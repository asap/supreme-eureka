const { Router } = require('express');

const {
  getAllPatients,
  getPatientById,
} = require('../../api/patients');

const router = Router();

router.get('/', getAllPatients);
router.get('/:id', getPatientById);

module.exports = router;
