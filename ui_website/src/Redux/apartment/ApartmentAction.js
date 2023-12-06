import { fetchAllApartment} from '../../Services/ApartmentService';
import {
    FETCH_APARTMENT,
    FETCH_ROOM,
    FETCH_FEE
} from './ApartmentType';

export  const getApartmentRedux =  () => {
    return async (dispatch) => {
        try {
            const response = await fetchAllApartment();
            console.log(response.data);
            dispatch({
                type: FETCH_APARTMENT,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

// export  const getRoomRedux =  (id) => {
//     return async (dispatch) => {
//         try {
//             const response = await getBillById(id);
//             console.log(response.data);
//             dispatch({
//                 type: FETCH_SINGLE_BILL,
//                 payload: response.data,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

// export  const createBillRedux =  (bill) => {
//     return async (dispatch) => {
//         try {
//             const response = await addBill(bill);
//             console.log(response.data);
//             dispatch({
//                 type: CREATE_BILL,
//                 payload: response.data,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }