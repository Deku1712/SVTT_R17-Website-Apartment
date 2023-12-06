import ApartmentService from "../../Service/ApartmentService"

import {
    FETCH_APARTMENT, UPDATE_APARTMENT,GET_BY_ID_APARTMENT
} from './apartmentType';

export const fetchApartment = () => {
    return async (dispatch) => {
        try {
            const response = await ApartmentService.getAllApartment();
            console.log(response)
            dispatch({
                type: FETCH_APARTMENT,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export const updateApartment = (id,apartment) => {
    return async (dispatch) => {
        try {
            const response = await ApartmentService.updateApartmentByID(id,apartment);
            console.log(response.data)
            dispatch({
                type: UPDATE_APARTMENT,
                payload : response.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export const getByIdApartment = (id) => {
    return async (dispatch) => {
        try {
            const response = await ApartmentService.getApartmentByID(id);
           
            dispatch({
                type: GET_BY_ID_APARTMENT,
                payload: response.data,
            });
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };
};