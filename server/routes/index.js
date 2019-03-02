const express = require('express');

const router = express.Router();

const patients = require('./patients');
const users = require('./users');

// Heartbeat for testing if server is running
router.get('/api/ping', (req, res) => res.json({ status: 'pong' }));

router.use('/api/patients/', patients);
router.use('/api/users/', users);

module.exports = router;
