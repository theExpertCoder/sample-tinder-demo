import axios from "axios"

const instance = axios.create({
    baseURL: 'https://sample-tinder-demo.herokuapp.com'
})

export default instance