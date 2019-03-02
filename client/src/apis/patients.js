import axios from 'axios';
import config from '../config';

console.log("api:", `${config.BASE_URL}:${config.PORT}/api`);

export default axios.create({
  baseURL: `${config.BASE_URL}:${config.PORT}/api`
});
