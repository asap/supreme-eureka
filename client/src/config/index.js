require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  BASE_URL: process.env.REACT_APP_ROOT,
}

