import axios from 'axios';

const port = process.env.PORT || 3000;

export default () => {
    return axios.create({
        baseURL: `http://localhost:${port}/api/`
    });
}

