const { Router } = require('express');

const {
  loginUser,
} = require('../../api/users');

const router = Router();

router.post('/login', loginUser);

module.exports = router;
