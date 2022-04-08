import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

export default axiosInstance;