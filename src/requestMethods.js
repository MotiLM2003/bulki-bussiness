import axios from "axios";

const BASE_URL = "http://52.63.161.150/"
const TOKEN = "";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})