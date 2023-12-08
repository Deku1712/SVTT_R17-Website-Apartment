import { FAILD, FETCH_POSTS_DATA, SUCCESS } from "../action/actionTypes"


const initalState = {
    posts : [],
    loading: false,
    error: null

}

export const postReducer = (state = initalState , action ) => {
    switch(action.type) {

        case FETCH_POSTS_DATA: {
            return{
                ...state, 
                loading: true,
            }
        }
        case SUCCESS:{
            return {
                ...state,
                posts : action.payload.posts_data,
                loading: false,
                error: null
            }
        }
        case FAILD: {
            return{
                ...state,
                loading : false,
                error: action.payload
            }
        }
        default : return state;
    }
}