import * as actionTypes from './actionsTypes';

export const adminFetchServiceReq = (page, adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE_REQ,
		adminToken:adminToken,
		page:page
	};
};

export const adminFetchServiceReqSuccess = (serviceReqResponse, serviceReqResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE_REQ_SUCCESS,
		serviceReqResponse: serviceReqResponse,
		serviceReqResponseMsg: serviceReqResponseMsg
	};
};

export const adminFetchServiceReqFail = (serviceReqResponse, serviceReqResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SERVICE_REQ_FAIL,
		serviceReqResponse: serviceReqResponse,
		serviceReqResponseMsg: serviceReqResponseMsg
	}
}

export const adminGetSingleServiceReq = (id, adminToken)=>{
	return{
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE_REQ,
		id:id,
		adminToken: adminToken 
	};
}; 

export const adminGetSingleServiceReqSuccess = (singleServiceReqResponse, singleServiceReqResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE_REQ_SUCCESS,
		singleServiceReqResponse: singleServiceReqResponse,
		singleServiceReqResponseMsg: singleServiceReqResponseMsg
	}
}

export const adminGetSingleServiceReqFail = (singleServiceReqResponse, singleServiceReqResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_SERVICE_REQ_FAIL,
		singleServiceReqResponse: singleServiceReqResponse,
		singleServiceReqResponseMsg: singleServiceReqResponseMsg
	}
}

export const updateServiceReq = (id,formData, adminToken) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE_REQ,
		id:id,
		formData: formData,
		adminToken:adminToken 
	}
}

export const updateServiceReqSuccess = (updateServiceReqResponse, updateServiceReqResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE_REQ_SUCCESS,
		updateServiceReqResponse: updateServiceReqResponse,
		updateServiceReqResponseMsg: updateServiceReqResponseMsg
	}
}

export const updateServiceReqFail  = (updateServiceReqResponse, updateServiceReqResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_SERVICE_REQ_FAIL,
		updateServiceReqResponse: updateServiceReqResponse,
		updateServiceReqResponseMsg: updateServiceReqResponseMsg
	}
}

export const admindeleteServiceReq = (id, adminToken) =>{
	return {
		type: actionTypes.ADMIN_DELETE_SERVICE_REQ,
		id:id,
		adminToken:adminToken
	}
}

export const deleteServiceReqSuccess = (deleteServiceReqResponse, deleteServiceReqResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_DELETE_SERVICE_REQ_SUCCESS,
		deleteServiceReqResponse: deleteServiceReqResponse,
		deleteServiceReqResponseMsg: deleteServiceReqResponseMsg
	}
}

export const deleteServiceReqFail  = (deleteServiceReqResponse, deleteServiceReqResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_DELETE_SERVICE_REQ_FAIL,
		deleteServiceReqResponse: deleteServiceReqResponse,
		deleteServiceReqResponseMsg: deleteServiceReqResponseMsg
	}
}