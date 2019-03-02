import axios from 'axios';
import config from '../config';

// console.log("api:", `${config.BASE_URL}:${config.PORT}/api`);

console.log("api:", `${config.BASE_URL}/api`);

// Use a port if one is defined
const port = `${config.PORT}` || '';

console.log("port", port);

export default axios.create({
  // baseURL: `${config.BASE_URL}${port}/api`
  baseURL: `${config.BASE_URL}/api`
});
