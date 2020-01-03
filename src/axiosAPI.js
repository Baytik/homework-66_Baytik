import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-65-baytik.firebaseio.com/pages/'
});

axiosAPI.interceptors.request.use(req => {
    console.log(req);
    return req
});

axiosAPI.interceptors.response.use(res => {
    console.log(res);
    return res
});

export default axiosAPI