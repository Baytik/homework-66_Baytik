import axios from 'axios';

const axiosAPI = axios.create({
    baseURL: 'https://homework-65-baytik.firebaseio.com/pages/'
});

export default axiosAPI;