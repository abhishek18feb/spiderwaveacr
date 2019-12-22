import * as actionTypes from './actionsTypes';

export const adminFetchMessage = (adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_MESSAGES,
		adminToken:adminToken
	};
};

export const adminFetchMessageSuccess = (messageResponse, messageResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_FETCH_MESSAGE_SUCCESS,
		messageResponse: messageResponse,
		messageResponseMsg: messageResponseMsg
	};
};

export const adminFetchMessageFail = (messageResponse, messageResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_MESSAGE_FAIL,
		messageResponse: messageResponse,
		messageResponseMsg: messageResponseMsg
	}
}

export const adminGetSingleMessage = (id, adminToken)=>{
	return{
		type: actionTypes.ADMIN_FETCH_SINGLE_MESSAGE,
		id:id,
		adminToken: adminToken
	};
};

export const adminGetSingleMessageSuccess = (messageResponse, messageResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_MESSAGE_SUCCESS,
		messageResponse: messageResponse,
		messageResponseMsg: messageResponseMsg
	}
}

export const adminGetSingleMessageFail = (messageResponse, messageResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_MESSAGE_FAIL,
		messageResponse: messageResponse,
		messageResponseMsg: messageResponseMsg
	}
}

export const updateMessage = (id,formData, adminToken) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_MESSAGE,
		id:id,
		formData: formData,
		adminToken:adminToken
	}
}

export const updateMessageSuccess = (updateMessageResponse, updateMessageResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_MESSAGE_SUCCESS,
		updateMessageResponse: updateMessageResponse,
		updateMessageResponseMsg: updateMessageResponseMsg
	}
}

export const updateMessageFail  = (updateMessageResponse, updateMessageResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_CMS_FAIL,
		updateMessageResponse: updateMessageResponse,
		updateMessageResponseMsg: updateMessageResponseMsg
	}
}