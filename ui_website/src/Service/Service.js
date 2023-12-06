import axios from "axios"


const POST_BASE_URL = "http://localhost:8080/api/posts"
const APARTMENT_BASE_URL = "http://localhost:8080/api/apartments"
const User_BASE_URL = "http://localhost:8080/api/users"

class Manage {

    //Post API
    getPosts() {
        return axios.get(POST_BASE_URL);
    }
    getPostById(id) {
        return axios.get(POST_BASE_URL + "/" + id)
    }

    //Apartment API
    getApartment() {
        return axios.get(APARTMENT_BASE_URL);
    }
    getApartmentById(id) {
        return axios.get(APARTMENT_BASE_URL + "/" + id)
    }
    getApartmentByUserId(id) {
        return axios.get(APARTMENT_BASE_URL + "/user/" + id)
    }

    addApartment(id, apartment) {
        return axios.post(APARTMENT_BASE_URL + "/user/" + id, apartment);
    }

    //User API

    getUserById(id) {
        return axios.get(User_BASE_URL + "/" + id)
    }






}
export default new Manage();