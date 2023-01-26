import axios from 'axios';
import config from '.';

export default {
  api: axios.create({ baseURL: config.Api.BaseURL, withCredentials: true }),
};
