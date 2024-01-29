import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://project-2-api.herokuapp.com/'
});

const apiKey = '64c77dd9-6b1c-40a3-b526-bf9c2e6e304b';

axiosInstance.interceptors.request.use(config => {
    config.url += `${config.url.includes('?') ? '&' : '?'}api_key=${apiKey}`;
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;