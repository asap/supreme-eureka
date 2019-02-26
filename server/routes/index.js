const express = require('express');

const router = express.Router();

const patients = require('./patients');
const users = require('./users');

// Heartbeat for testing if server is running
router.get('/ping', (req, res) => res.json({ status: 'pong' }));

router.use('/patients/', patients);
router.use('/users/', users);

module.exports = router;
