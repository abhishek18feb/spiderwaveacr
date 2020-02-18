import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	serviceReqResponse:null,
	serviceReqResponseMsg:null,
	singleServiceReqResponse:null,
	singleServiceReqResponseMsg:null,
	messageError:null,
	updateServiceReqResponse:null,
	updateServiceReqResponseMsg:null
}

const fetchServiceReqSuccess = (state,action) =>{
	return updateObject(state, {
            serviceReqResponse: action.serviceReqResponse,
			serviceReqResponseMsg:action.serviceReqResponseMsg,
			updateServiceReqResponse:null,
			updateServiceReqResponseMsg:null,
			messageError:null		
		});
};

const fetchServiceReqFail = (state, action)=>{
	return updateObject(state, {
		serviceReqResponse: null,
		serviceReqResponseMsg: action.serviceReqResponseMsg,
		updateServiceReqResponse:null,
		updateServiceReqResponseMsg:null,
		messageError: true
	});
};

const fetchSingleServiceReqSuccess = (state,action) =>{
	console.log(action);
	return updateObject(state, {
			singleServiceReqResponse: action.singleServiceReqResponse,
			singleServiceReqResponseMsg:action.singleServiceReqResponseMsg,
			messageError:null		
		});
};

const fetchSingleServiceReqFail = (state, action)=>{
	return updateObject(state, {
		singleServiceReqResponse: null,
		singleServiceReqResponseMsg: action.singleServiceReqResponseMsg,
		messageError: true
	});
};

const updateServiceReqSuccess = (state,action) =>{
	return updateObject(state, {
			updateServiceReqResponse: true,
			updateServiceReqResponseMsg:action.updateServiceReqResponseMsg,
			messageError:null		
		});
};

const updateServiceReqFail = (state, action)=>{
	return updateObject(state, {
		updateServiceReqResponse: false,
		updateServiceReqResponseMsg: action.updateServiceReqResponseMsg,
		messageError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.ADMIN_FETCH_SERVICE_REQ_SUCCESS: return fetchServiceReqSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SERVICE_REQ_FAIL: return fetchServiceReqFail(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_SERVICE_REQ_SUCCESS: return fetchSingleServiceReqSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_SERVICE_REQ_FAIL: return fetchSingleServiceReqFail(state, action)
        case actionTypes.ADMIN_UPDATE_SERVICE_REQ_SUCCESS: return updateServiceReqSuccess(state, action)
		case actionTypes.ADMIN_UPDATE_SERVICE_REQ_FAIL: return updateServiceReqFail(state, action)
		default: return state
	}
}

export default reducer;