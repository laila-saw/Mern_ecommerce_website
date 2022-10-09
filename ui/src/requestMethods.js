import axios from "axios";
const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2Q0NTIyODE1NmY1YjkwZmRiNzBhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDk2NDk1NSwiZXhwIjoxNjY1MjI0MTU1fQ.S7bWavqDJH88uxfjPdGMCuBNhyzHV7SjJTFlojjNY2Q" 

export const publicRequest = axios.create({
    baseURL : BASE_URL, 
});

export const userRequest = axios.create({
    baseURL : BASE_URL, 
    headers : {
        token : "Bearer "+TOKEN
    }
});