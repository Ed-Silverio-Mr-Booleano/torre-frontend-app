import axios from 'axios';

const api = axios.create({
    baseURL: 'https://torre-backend-app.herokuapp.com',
});

export default api;
