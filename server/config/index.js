require('dotenv').config();

const db = require ('./db');

module.exports = {
  port: 5000,
  bodyLimit: '100kb',
  cors: {
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:5000',
      'http://supreme-eureka.herokuapp.com/',
      'https://supreme-eureka.herokuapp.com/',
    ],
  },
  db,
};
