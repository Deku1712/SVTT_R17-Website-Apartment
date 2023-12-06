import { addBill, fetchAllBill, getBillById } from '../../Services/BillService';
import {
    FETCH_BILL,
    FETCH_SINGLE_BILL,
    CREATE_BILL
} from './BillType';

export  const getBillRedux =  () => {
    return async (dispatch) => {
        try {
            const response = await fetchAllBill();
            console.log(response.data);
            dispatch({
                type: FETCH_BILL,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export  const getBillDetailsRedux =  (id) => {
    return async (dispatch) => {
        try {
            const response = await getBillById(id);
            console.log(response.data);
            dispatch({
                type: FETCH_SINGLE_BILL,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export  const createBillRedux =  (bill) => {
    return async (dispatch) => {
        try {
            const response = await addBill(bill);
            console.log(response.data);
            dispatch({
                type: CREATE_BILL,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}