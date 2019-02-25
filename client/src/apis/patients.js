import axios from 'axios';

export default axios.create({
  // TODO: Should come from config
  baseURL: 'http://localhost:3001'
});
