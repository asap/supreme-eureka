const express = require('express');

const router = express.Router();

const patients = require('./patients');

// Heartbeat for testing if server is running
router.get('/ping', (req, res) => res.json({ status: 'pong' }));

router.use('/patients/', patients);

module.exports = router;
