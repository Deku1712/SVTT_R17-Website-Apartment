import { combineReducers } from 'redux';
import BillReducer from './../bill/BillReducer';
// import ApartmentReducer from '../apartment/ApartmentReducer';

const rootReducer = combineReducers({
    bill : BillReducer,
    // apartment : ApartmentReducer
});

export default rootReducer;