import RoomService from "../../Service/RoomService"

import { UPDATE_ROOMS } from "./roomsType";
export const updateRooms = (id,room) => {
    return async (dispatch) => {
        try {
            const response = await RoomService.updateRoomByID(id,room);
            console.log(response.data)
            dispatch({
                type:  UPDATE_ROOMS,
                payload : response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};