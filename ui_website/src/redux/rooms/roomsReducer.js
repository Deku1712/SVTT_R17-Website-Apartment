import { UPDATE_ROOMS,GET_ROOMS_BY_ID } from "./roomsType";

const initialState = {
    rooms : []
   };
   const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case UPDATE_ROOMS:
        return {
          ...state,
          rooms: action.payload,

        };
       
        default:
          return state;
      }
    };
    export default roomsReducer;