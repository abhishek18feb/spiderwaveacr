import * as actionTypes from './actionsTypes';

export const addCms = (formData, adminToken) =>{

	return {
		type: actionTypes.ADMIN_ADD_CMS,
		formData: formData,
		adminToken:adminToken
	}
}

export const addCmsSuccess = (addCmsResponse, addCmsResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_ADD_CMS_SUCCESS,
		addCmsResponse: addCmsResponse,
		addCmsResponseMsg: addCmsResponseMsg
	}
}

export const addCmsFail  = (addCmsResponse, addCmsResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_ADD_CMS_FAIL,
		addCmsResponse: addCmsResponse,
		addCmsResponseMsg: addCmsResponseMsg
	}
}

export const adminFetchCms = (adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_CMS,
		adminToken:adminToken
	};
};

export const adminFetchCmsSuccess = (cmsResponse, cmsResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_FETCH_CMS_SUCCESS,
		cmsResponse: cmsResponse,
		cmsResponseMsg: cmsResponseMsg
	};
};

export const adminFetchCmsFail = (cmsResponse, cmsResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_CMS_FAIL,
		cmsResponse: cmsResponse,
		cmsResponseMsg: cmsResponseMsg
	}
}

export const adminGetSingleCms = (id, adminToken)=>{
	return{
		type: actionTypes.ADMIN_FETCH_SINGLE_CMS,
		id:id,
		adminToken: adminToken
	};
};

export const adminGetSingleCmsSuccess = (cmsResponse, cmsResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_CMS_SUCCESS,
		cmsResponse: cmsResponse,
		cmsResponseMsg: cmsResponseMsg
	}
}

export const adminGetSingleCmsFail = (cmsResponse, cmsResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SINGLE_CMS_FAIL,
		cmsResponse: cmsResponse,
		cmsResponseMsg: cmsResponseMsg
	}
}

export const updateCms = (id,formData, adminToken) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_CMS,
		id:id,
		formData: formData,
		adminToken:adminToken
	}
}

export const updateCmsSuccess = (updateCmsResponse, updateCmsResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_CMS_SUCCESS,
		updateCmsResponse: updateCmsResponse,
		updateCmsResponseMsg: updateCmsResponseMsg
	}
}

export const updateCmsFail  = (updateCmsResponse, updateCmsResponseMsg) =>{
	return {
		type: actionTypes.ADMIN_UPDATE_CMS_FAIL,
		updateCmsResponse: updateCmsResponse,
		updateCmsResponseMsg: updateCmsResponseMsg
	}
}