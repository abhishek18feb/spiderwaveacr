import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	addServiceResponse:null,
	addServiceResponseMsg:null,
	serviceResponse:null,
	serviceResponseMsg:null,
	singleServiceResponse:null,
	singleServiceResponseMsg:null,
	serviceError:null,
	updateServiceResponse:null,
	updateServiceResponseMsg:null
}

const fetchServiceSuccess = (state,action) =>{
	return updateObject(state, {
			serviceResponse: action.serviceResponse,
			serviceResponseMsg:action.serviceResponseMsg,
			updateServiceResponse:null,
			updateServiceResponseMsg:null,
			serviceError:null		
		});
};

const fetchServiceFail = (state, action)=>{
	return updateObject(state, {
		serviceResponse: null,
		serviceResponseMsg:action.serviceResponseMsg,
		updateServiceResponse:null,
		updateServiceResponseMsg:null,
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
		updateServiceResponseMsg: action.serviceResponseMsg,
		serviceError: true
	});
};

const updateServiceSuccess = (state,action) =>{
	return updateObject(state, {
			updateServiceResponse: true,
			updateServiceResponseMsg:action.updateServiceResponseMsg,
			serviceError:null		
		});
};

const updateServiceFail = (state, action)=>{
	return updateObject(state, {
		updateServiceResponse: false,
		updateServiceResponseMsg: action.updateServiceResponseMsg,
		serviceError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.ADMIN_FETCH_SERVICE_SUCCESS: return fetchServiceSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SERVICE_FAIL: return fetchServiceFail(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_SERVICE_SUCCESS: return fetchSingleServiceSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_SERVICE_FAIL: return fetchSingleServiceFail(state, action)

		case actionTypes.ADMIN_UPDATE_SERVICE_SUCCESS: return updateServiceSuccess(state, action)
		case actionTypes.ADMIN_UPDATE_SERVICE_FAIL: return updateServiceFail(state, action)
		default: return state
	}
}

export default reducer;