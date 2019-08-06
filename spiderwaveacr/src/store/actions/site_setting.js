import * as actionTypes from './actionsTypes';

export const updateSiteSetting = (formData, adminToken)=>{
	return {
		type: actionTypes.ADMIN_UPDATE_SITE_SETTING,
		formData: formData,
		adminToken: adminToken
	};
};

export const updateSiteSettingSuccess=(siteSettingResponse, siteSettingResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_UPDATE_SITE_SETTING_SUCCESS,
		siteSettingResponse:siteSettingResponse,
		siteSettingResponseMsg:siteSettingResponseMsg
	};
};

export const updateSiteSettingFail=(siteSettingResponse, siteSettingResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_UPDATE_SITE_SETTING_FAIL,
		siteSettingResponse:siteSettingResponse,
		siteSettingResponseMsg:siteSettingResponseMsg
	};
};
export const fetchSiteSetting = (adminToken)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SITE_SETTING,
		adminToken:adminToken
	}
};

export const fetchSiteSettingSuccess = (siteSettingResponse, siteSettingResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SITE_SETTING_SUCCESS,
		siteSettingResponse: siteSettingResponse,
		siteSettingResponseMsg: siteSettingResponseMsg
	};
};

export const fetchSiteSettingFail =(siteSettingResponse, siteSettingResponseMsg)=>{
	return {
		type: actionTypes.ADMIN_FETCH_SITE_SETTING_FAIL,
		siteSettingResponse:siteSettingResponse,
		siteSettingResponseMsg:siteSettingResponseMsg
	};
};