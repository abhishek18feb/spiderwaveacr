import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	siteSettingResponse:null,
	siteSettingResponseMsg:null,
	siteSettingError:null
}

const updateSiteSettingSuccess=(state,action)=>{ 
	return updateObject(state, {
		siteSettingResponse: action.siteSettingResponse,
		siteSettingResponseMsg: action.siteSettingResponseMsg
	});
};

const updateSiteSettingFail=(state,action)=>{
	return updateObject(state, {
		siteSettingResponse:null,
		siteSettingResponseMsg: action.siteSettingResponseMsg,
		siteSettingError: true
	});
};

const fetchSiteSettingSuccess=(state,action)=>{ 
	return updateObject(state, {
		siteSettingResponse: action.siteSettingResponse,
		//siteSettingResponseMsg: action.siteSettingResponseMsg
	});
};

const fetchSiteSettingFail=(state,action)=>{
	return updateObject(state, {
		siteSettingResponse:null,
		siteSettingResponseMsg: action.siteSettingResponseMsg,
		siteSettingError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.ADMIN_UPDATE_SITE_SETTING_SUCCESS: return updateSiteSettingSuccess(state, action);
		case actionTypes.ADMIN_UPDATE_SITE_SETTING_FAIL: return updateSiteSettingFail(state, action);
		case actionTypes.ADMIN_FETCH_SITE_SETTING_SUCCESS: return fetchSiteSettingSuccess(state, action);
		case actionTypes.ADMIN_FETCH_SITE_SETTING_FAIL: return fetchSiteSettingFail(state, action);
		default: return state;
	};
};

export default reducer;