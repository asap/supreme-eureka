const { Router } = require('express');
const loginUserByEmail = require('./login_user_by_email');

const router = Router();

router.post('/login', loginUserByEmail);

module.exports = router;
