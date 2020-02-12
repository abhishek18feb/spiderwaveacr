import * as actionTypes from '../../actions/front/actionsTypes';
import {updateObject} from '../../../shared/utility';


const initialState={
	error: null,
	loading: false,
	success:null,
    displaySessionMessage:false
};

const serviceRequestSuccess = (state, action) =>{
    return updateObject(state, {error: null, loading:true, success:action.success})
}

const serviceRequestFail = (state, action) =>{
    return updateObject(state, {error: null, loading:true})
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_SERVICE_REQUEST_SUCCESS: return serviceRequestSuccess(state, action);
        case actionTypes.ADD_SERVICE_REQUEST_FAIL: return serviceRequestFail(state, action)
        default: return state;
    }
}


export default reducer;