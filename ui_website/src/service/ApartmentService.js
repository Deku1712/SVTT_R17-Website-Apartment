import axios from "./axiosConfig";
// const getAuthToken = () => {
//   return window.localStorage.getItem('accessToken');
// };

// // axios.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;

const Apartment_Service_BASE_REST_API_URL = "/api/apartments";


class ApartmentService {
  getAllApartment() {
    return axios.get(Apartment_Service_BASE_REST_API_URL)
}
  createApartment(apartment) {
    return axios.post(Apartment_Service_BASE_REST_API_URL, apartment)
  }
  getApartmentByID(apartment_id) {
    return axios.get(Apartment_Service_BASE_REST_API_URL + "/" + apartment_id);
  }
  updateApartmentByID(apartment_id, apartment) {
    return axios.put(Apartment_Service_BASE_REST_API_URL + "/" + apartment_id, apartment);
  }
}

export default new ApartmentService();
