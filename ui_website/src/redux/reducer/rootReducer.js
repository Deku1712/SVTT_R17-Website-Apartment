
import apartmentReducer from '../apartment/apartmentReducer';
import roomsReducer from '../rooms/roomsReducer';
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  postReducer,
  userReducer,
  apartment : apartmentReducer,
  rooms : roomsReducer})

