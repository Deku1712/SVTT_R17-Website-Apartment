import axios from 'axios';

// All Bill
const fetchAllBill = ()=>{
    return axios.get("http://localhost:8080/api-apartment/bills");
}

const addBill = (bill) => {
    return axios.post("http://localhost:8080/api-apartment/bills", bill);
}

const fetchAllApartment = () =>{
    return axios.get("http://localhost:8080/api-apartment/apartments")
}

const fetchAllRooms = () =>{
    return axios.get("http://localhost:8080/api-apartment/rooms")
}


const getBillById = (id) => {
    return axios.get(`http://localhost:8080/api-apartment/bills/${id}`);
}

const getBillByRoomName = (roomName) => {
    return axios.get(`http://localhost:8080/api-apartment/bills/search?room_name=${roomName}`);
}


export  {fetchAllBill, getBillById, addBill, fetchAllApartment, getBillByRoomName, fetchAllRooms};