import * as actionTypes from './actionsTypes';

export const addService = (formData, adminToken) =>{
	console.log(formData)
	return {
		type: actionTypes.ADMIN_ADD_SERVICE,
		formData: formData,
		adminToken:adminToken
	}
}

export const addServiceSuccess = (addServiceResponse, addServiceResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_ADD_SERVICE_SUCCESS,
		addServiceResponse: addServiceResponse,
		addServiceResponseMsg: addServiceResponseMsg
	}
}

export const addServiceFail  = (addServiceResponse, addServiceResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_ADD_SERVICE_FAIL,
		addServiceResponse: addServiceResponse,
		addServiceResponseMsg: addServiceResponseMsg
	}
}

export const adminFetchService = (adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE,
		adminToken:adminToken
	};
};

export const adminFetchServiceSuccess = (serviceResponse, serviceResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE_SUCCESS,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	};
};

export const adminFetchServiceFail = (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE_FAIL,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}

export const adminGetSingleService = (id, adminToken)=>{
	return{
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE,
		id:id,
		adminToken: adminToken
	};
};

export const adminGetSingleServiceSuccess = (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE_SUCCESS,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}

export const adminGetSingleServiceFail = (serviceResponse, serviceResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE_FAIL,
		serviceResponse: serviceResponse,
		serviceResponseMsg: serviceResponseMsg
	}
}

export const updateService = (id,formData, adminToken) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE,
		id:id,
		formData: formData,
		adminToken:adminToken
	}
}

export const updateServiceSuccess = (updateServiceResponse, updateServiceResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE_SUCCESS,
		updateServiceResponse: updateServiceResponse,
		updateServiceResponseMsg: updateServiceResponseMsg
	}
}

export const updateServiceFail  = (updateServiceResponse, updateServiceResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE_FAIL,
		updateServiceResponse: updateServiceResponse,
		updateServiceResponseMsg: updateServiceResponseMsg
	}
}