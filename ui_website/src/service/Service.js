import axios from "axios";


const Service_BASE_REST_API_URL = "http://localhost:8080/OJT";

class ServiceWeb {
  getApartmentByID(apartment_id) {
    return axios.get(Service_BASE_REST_API_URL + '/apartmentID/' + apartment_id);
  }
  updateApartmentByID(apartment_id,apartment){
    return axios.put(Service_BASE_REST_API_URL + '/edit-apartment/' + apartment_id , apartment);
  }
}

export default new ServiceWeb();
