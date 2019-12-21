import * as actionTypes from '../../actions/front/actionsTypes';
import {updateObject} from '../../../shared/utility';


const initialState={
	error: null,
	loading: false,
	resetResponseMsg:null,
    displaySessionMessage:false
};

const customerAddContactSuccess = (state, action) =>{
    return updateObject(state, {error: null, loading:true})
}

const customerAddContactFail = (state, action) =>{
    return updateObject(state, {error: null, loading:true})
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.CUSTOMER_ADD_CONTACT_SUCCESS: return customerAddContactSuccess(state, action);
        case actionTypes.CUSTOMER_ADD_CONTACT_FAIL: return customerAddContactFail(state, action)
        default: return state;
    }
}


export default reducer;