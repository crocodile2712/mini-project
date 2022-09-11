import axios from 'axios';
export const BASE_URL = 'http://localhost:5000/api/'
export const USER_TOKEN =localStorage.getItem('token') ? `bear ${localStorage.getItem('token')}` : null
console.log("user",USER_TOKEN)
export const publicRequest = axios.create({
    baseURL : BASE_URL
})
export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers: {token : USER_TOKEN}
})
