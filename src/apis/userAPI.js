import axios from 'axios';
// import Cookies from 'universal-cookie';
// const cookie = new Cookies();

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};

headers.Authorization = 'Bearer 1234'; //  `Bearer ${cookie.get('token')}`;
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = 'fake token'; // cookie.get('token');
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
