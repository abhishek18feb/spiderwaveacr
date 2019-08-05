import * as actionTypes from './actionsTypes';

export const updateSiteSetting = (formData, adminToken)=>{
	return {
		type: actionTypes.ADMIN_UPDATE_SITE_SETTING,
		formData: formData,
		adminToken: adminToken
	};
};