import * as actionTypes from '../../actions/front/actionsTypes';
import {updateObject} from '../../../shared/utility';

const initialState={
	serviceList:null,
	serviceResponseMsg:null,
	singleService:null,
	singleServiceResponse:null,
	singleServiceResponseMsg:null,
	serviceError:null
}

const fetchServiceSuccess = (state,action) =>{
	return updateObject(state, {
            serviceList: action.serviceResponse,
			serviceResponseMsg:action.serviceResponseMsg,
			serviceError:null		
		});
};

const fetchServiceFail = (state, action)=>{
	return updateObject(state, {
		serviceList: null,
		serviceResponseMsg:action.serviceResponseMsg,
		serviceError:true	
	});
};

const fetchSingleServiceSuccess = (state,action) =>{
	return updateObject(state, {
			singleServiceResponse: action.serviceResponse,
			singleServiceResponseMsg:action.serviceResponseMsg,
			serviceError:null		
		});
};

const fetchSingleServiceFail = (state, action)=>{
	return updateObject(state, {
		singleServiceResponse: null,
		singleServiceResponseMsg: action.serviceResponseMsg,
		serviceError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.CUSTOMER_FETCH_SERVICE_SUCCESS: return fetchServiceSuccess(state, action)
		case actionTypes.CUSTOMER_FETCH_SERVICE_FAIL: return fetchServiceFail(state, action)
		case actionTypes.GET_SERVICE_DETAILS_SUCCESS: return fetchSingleServiceSuccess(state, action)
		case actionTypes.GET_SERVICE_DETAILS_FAIL: return fetchSingleServiceFail(state, action)
		default: return state
	}
}

export default reducer;