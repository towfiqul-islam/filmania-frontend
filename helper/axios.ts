import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const axios_instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
 })


export default axios_instance;