import axios from "axios";

const BASE_URL = 'http://localhost:3000'

function getItems() {
    return axios.get(`${BASE_URL}/items`)
}

const getItem = (id) => {
    return axios.get(`${BASE_URL}/items/${id}`)
} 

export {
    getItems,
    getItem
}