import * as actionTypes from './actionsTypes';

export const customerFetchService=()=>{
    return {
        type: actionTypes.CUSTOMER_FETCH_SERVICE
    }
}

export const customerFetchServiceSuccess  = (serviceResponse, serviceResponseMsg) =>{
	return {
		type: actionTypes.CUSTOMER_FETCH_SERVICE_SUCCESS,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	};
};

export const customerFetchServiceFail = (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.CUSTOMER_FETCH_SERVICE_FAIL,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}
