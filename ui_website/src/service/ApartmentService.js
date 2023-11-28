import axios from "axios";


const Apartment_Service_BASE_REST_API_URL = "http://localhost:8080/apartment/";

class ApartmentService {
  getApartmentByID(apartment_id) {
    return axios.get(Apartment_Service_BASE_REST_API_URL  + apartment_id);
  }
  updateApartmentByID(apartment_id,apartment){
    return axios.put(Apartment_Service_BASE_REST_API_URL  + apartment_id , apartment);
  }
}

export default new ApartmentService();
