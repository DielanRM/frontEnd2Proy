import axios from "axios";

const BASE_URL = 'http://localhost:3000'

const loginUserService = (data)=>{
    return axios.post(`${BASE_URL}/login`, data);
}

const regiserUserService = (data)=>{
    return axios.post(`${BASE_URL}/register`, data);
}

const logOutUserService = ()=>{
    localStorage.removeItem('token')
}

export{ 
    loginUserService, 
    regiserUserService,
    logOutUserService
 }