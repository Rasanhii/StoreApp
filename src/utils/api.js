import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-axis.onrender.com',
});

export default api;