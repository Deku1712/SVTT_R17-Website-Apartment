import {
    FETCH_BILL,
    FETCH_SINGLE_BILL,
    CREATE_BILL,
    FETCH_SINGLE_BILL_BY_ROOMID
} from './BillType';

const initialState = {
    bill: [],
    singleBill :{}
};

const BillReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BILL :
        return {
            ...state,
            bill: action.payload,
        };

        case FETCH_SINGLE_BILL :
        return {
            ...state,
            singleBill : action.payload
        };

        case FETCH_SINGLE_BILL_BY_ROOMID :
        return {
            ...state,
            singleBillByRoomId : action.payload
        };

        case CREATE_BILL :
        return {
            ...state,
            newBill : action.payload
        };



        default:
            return state;
        }
      };

export default BillReducer;