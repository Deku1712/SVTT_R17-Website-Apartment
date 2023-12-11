import { getProfile } from "../../Service/LoginService";
import Service from "../../Service/Service";
import { FAILD, FETCH_POSTS_DATA, FETCH_USER_DATA, FETCH_USER_FAILD, FETCH_USER_SUCCESS, SUCCESS } from "./actionTypes"
export const fetchUserData = () => {
    return async (dispatch) => {
       dispatch({type: FETCH_USER_DATA});

       try {
           const res_user= await getProfile();
           const res_apartment = await Service.getApartmentByUserId(res_user.data.id)
           
           
           dispatch({
               type: FETCH_USER_SUCCESS,
               payload:{
                   info: res_user.data,
                   apartments: res_apartment.data
               }
           })
       } catch (error) {
           dispatch({
               type : FETCH_USER_FAILD,
               payload: error,
           })
       }

    }
}

export const addApartment = (id,apartment_input) => {
    return async(dispatch) => {
        dispatch({type: FETCH_USER_DATA })
        try {
            
            const res = await Service.addApartment(id, apartment_input);
            dispatch(fetchUserData())
            
            
        } catch (error) {
            dispatch({
                type: FETCH_USER_FAILD,
                payload: error.message
            })
        }
        
    }
}

export const createRoom = (room) => {
    return async(dispatch) => {
        dispatch({type: FETCH_USER_DATA})
        try{
            const res = await Service.createRoom(room);
            dispatch(fetchUserData())
        }
        catch(error){
            dispatch({
                type: FETCH_USER_FAILD,
                payload: error.message
            })
        }
    }
}