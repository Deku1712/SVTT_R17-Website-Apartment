import { FETCH_USER_DATA, FETCH_USER_FAILD, FETCH_USER_SUCCESS, SUCCESS } from "../action/actionTypes"

const initalState = {
    info: {},
    apartments: [],
    loading: false,
    error: null,
}

export const userReducer = ( state = initalState, action)=>{

    switch(action.type){
        case FETCH_USER_DATA: {
            return{
                ...state, 
                loading: true,
            }
        }
        case FETCH_USER_SUCCESS:{
            return{
                ...state,
                info : action.payload.info,
                apartments: action.payload.apartments,
                loading : false,
            }
        }
        case FETCH_USER_FAILD:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        }
        default: {
            return state;
            
        }
    }
}
