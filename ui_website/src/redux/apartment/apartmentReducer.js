

import {
    FETCH_APARTMENT,UPDATE_APARTMENT,GET_BY_ID_APARTMENT
    
} from './apartmentType'; 

const initialState = {
   apartments : []
  };
  const apartmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_APARTMENT:
        return {
          ...state,
          apartments: action.payload,
        };
        case GET_BY_ID_APARTMENT:
        return {
          ...state,
          apartments: action.payload,
        };
        case UPDATE_APARTMENT:
        return {
          ...state,
          
          apartments: action.payload,

        };
        
        default:
          return state;
      }
    };
    
    export default apartmentReducer;