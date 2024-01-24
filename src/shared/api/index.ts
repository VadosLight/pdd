import axios from "axios";

export const axiosInstancePublic = axios.create({
    'baseURL': '/'
})