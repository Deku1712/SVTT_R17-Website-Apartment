import axios from "./axiosConfig";


const Room_Service_BASE_REST_API_URL = "/api/room/";

class RoomService {
  getRoomByID(room_id) {
    return axios.get(Room_Service_BASE_REST_API_URL  + room_id);
  }
  updateRoomByID(room_id,room){
    return axios.put(Room_Service_BASE_REST_API_URL  + room_id , room);
  }
}

export default new RoomService();