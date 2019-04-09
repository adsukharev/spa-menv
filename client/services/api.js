import axios from 'axios';
import { PORT_MACHINE } from "babel-dotenv";

export default () => {
    return axios.create({
        baseURL: `http://localhost:${PORT_MACHINE}/api/`
    });
}

