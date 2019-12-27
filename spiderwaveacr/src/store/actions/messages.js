import * as actionTypes from './actionsTypes';

export const adminFetchMessage = (page, adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_MESSAGES,
		adminToken:adminToken,
		page:page
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
		type: actionTypes.ADMIN_UPDATE_MESSAGE_FAIL,
		updateMessageResponse: updateMessageResponse,
		updateMessageResponseMsg: updateMessageResponseMsg
	}
}

export const admindeleteMessage = (id, adminToken) =>{
	return {
		type: actionTypes.ADMIN_DELETE_MESSAGE,
		id:id,
		adminToken:adminToken
	}
}

export const deleteMessageSuccess = (deleteMessageResponse, deleteMessageResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_DELETE_MESSAGE_SUCCESS,
		deleteMessageResponse: deleteMessageResponse,
		deleteMessageResponseMsg: deleteMessageResponseMsg
	}
}

export const deleteMessageFail  = (deleteMessageResponse, deleteMessageResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_DELETE_MESSAGE_FAIL,
		deleteMessageResponse: deleteMessageResponse,
		deleteMessageResponseMsg: deleteMessageResponseMsg
	}
}