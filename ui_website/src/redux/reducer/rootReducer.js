import { combineReducers } from 'redux';

import apartmentReducer from '../apartment/apartmentReducer';
import roomsReducer from '../rooms/roomsReducer';

const rootReducer = combineReducers({
    apartment : apartmentReducer,
    rooms : roomsReducer
});

export default rootReducer;