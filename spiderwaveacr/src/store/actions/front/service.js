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

export const getServiceDetails = (serviceId) =>{
	console.log('service id'+ serviceId)
	return{
		type: actionTypes.GET_SERVICE_DETAILS,
		serviceId:serviceId
	}
}

export const getServiceDetailSuccess =  (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.GET_SERVICE_DETAILS_SUCCESS,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}

export const getServiceDetailFail = (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.GET_SERVICE_DETAILS_FAIL,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}
