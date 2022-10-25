import axios from 'axios';
import proxy from '../configs/host';

const env = 'development';
const API_HOST = proxy[env].API;

const TIMEOUT = 5000;

export const instance = axios.create({
  baseURL: API_HOST,
  timeout: TIMEOUT,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      return data;

    }
    return Promise.reject(response?.data);
  },
  (e) => Promise.reject(e),
);

export default instance;
