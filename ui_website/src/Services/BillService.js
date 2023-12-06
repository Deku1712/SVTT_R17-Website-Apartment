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


// const deleteProject = (id) => {
//     return axios.delete(`http://localhost:8080/api-backend/projects/${id}`);
// }

const getBillById = (id) => {
    return axios.get(`http://localhost:8080/api-apartment/bills/${id}`);
}

const getBillByRoomId = (roomId) => {
    return axios.get(`http://localhost:8080/api-apartment/searchBillsByRoomId/${roomId}`);
}

// const updateProject = (id ,updatedProject) => {
//     return axios.put(`http://localhost:8080/api-backend/projects/${id}`, updatedProject);
// }

// const getProjectByDeptId = (id) => {
//     return axios.get(`http://localhost:8080/api-backend/filterByDeptId/${id}`);
// }

// const sortByUpdTmDecs = () =>{
//     return axios.get("http://localhost:8080/api-backend/projects/sortByUpdTmDecs");
// }

// const sortByUpdTmIncs = () =>{
//     return axios.get("http://localhost:8080/api-backend/projects/sortByUpdTmIncs");
// }
// const getProjectByName = (name)=>{
//     return axios.get(`http://localhost:8080/api-backend/projects/search?name=${name}`);
// }


// // Dept 

// const fetchAllDept = ()=>{
//     return axios.get("http://localhost:8080/api-backend/depts");
// }
// const getDeptById = (id) => {
//     return axios.get(`http://localhost:8080/api-backend/depts/${id}`);
// }

// const addDept = (dept) => {
//     return axios.post("http://localhost:8080/api-backend/depts", dept);
//}
export  {fetchAllBill,getBillById, addBill, fetchAllApartment, getBillByRoomId};