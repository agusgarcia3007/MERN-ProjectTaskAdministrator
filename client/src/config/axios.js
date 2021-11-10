import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BACKURL
});

export default axiosClient;