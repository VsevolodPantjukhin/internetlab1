import axios from 'axios';
import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: 'api/',
  timeout: 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  transformRequest: [(data) => JSON.stringify(data)],
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export { axiosInstance };
