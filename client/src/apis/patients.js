import axios from 'axios';
import config from '../config';

// Use a port if one is defined
const port = process.env.PORT || config.PORT || '';

export default axios.create({
  baseURL: `${config.BASE_URL}${port}/api`
});
