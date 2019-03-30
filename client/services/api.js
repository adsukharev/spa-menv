import axios from 'axios';

const port = 3333;

export default () => {
    return axios.create({
        baseURL: `http://localhost:${port}/api/`
    });
}

