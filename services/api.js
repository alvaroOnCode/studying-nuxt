import axios from 'axios';
import API_URL from './api.config';

const api = {
    getAllRestaurants: () => {
        return request({
            method: "get",
            url: 'restaurants'
        });
    }
}

async function request(options) {
    const config = {
        method: options.method,
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    const urlCall = API_URL + options.url;

    try {
        const response = await axios[options.method](urlCall, config)
        return {
            result: true,
            data: response.data
        };
    } catch (error) {
        return {
            result: false,
            error
        };
    }
}

export default api;