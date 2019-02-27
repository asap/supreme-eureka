const { Router } = require('express');
const { User } = require('../../db/models');

const {
  loginUser,
} = require('../../api/users');

const router = Router();

router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  
  res.json({
    users,
  });
});
router.post('/login', loginUser);

module.exports = router;
