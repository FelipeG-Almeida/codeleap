import axios from 'axios';

const baseUrl = 'https://dev.codeleap.co.uk';

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
