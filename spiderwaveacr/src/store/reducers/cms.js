import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	addCmsResponse:null,
	addCmsResponseMsg:null,
	cmsResponse:null,
	cmsResponseMsg:null,
	singleCmsResponse:null,
	singleCmsResponseMsg:null,
	cmsError:null,
	updateCmsResponse:null,
	updateCmsResponseMsg:null
}

const fetchCmsSuccess = (state,action) =>{
	return updateObject(state, {
			cmsResponse: action.cmsResponse,
			cmsResponseMsg:action.cmsResponseMsg,
			updateCmsResponse:null,
			updateCmsResponseMsg:null,
			cmsError:null		
		});
};

const fetchCmsFail = (state, action)=>{
	return updateObject(state, {
		cmsResponse: null,
		cmsResponseMsg: action.cmsResponseMsg,
		updateCmsResponse:null,
		updateCmsResponseMsg:null,
		cmsError: true
	});
};

const fetchSingleCmsSuccess = (state,action) =>{
	return updateObject(state, {
			singleCmsResponse: action.cmsResponse,
			singleCmsResponseMsg:action.cmsResponseMsg,
			cmsError:null		
		});
};

const fetchSingleCmsFail = (state, action)=>{
	return updateObject(state, {
		singleCmsResponse: null,
		singleCmsResponseMsg: action.cmsResponseMsg,
		cmsError: true
	});
};

const updateCmsSuccess = (state,action) =>{
	return updateObject(state, {
			updateCmsResponse: true,
			updateCmsResponseMsg:action.updateCmsResponseMsg,
			cmsError:null		
		});
};

const updateCmsFail = (state, action)=>{
	return updateObject(state, {
		updateCmsResponse: false,
		updateCmsResponseMsg: action.updateCmsResponseMsg,
		cmsError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.ADMIN_FETCH_CMS_SUCCESS: return fetchCmsSuccess(state, action)
		case actionTypes.ADMIN_FETCH_CMS_FAIL: return fetchCmsFail(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_CMS_SUCCESS: return fetchSingleCmsSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_CMS_FAIL: return fetchSingleCmsFail(state, action)

		case actionTypes.ADMIN_UPDATE_CMS_SUCCESS: return updateCmsSuccess(state, action)
		case actionTypes.ADMIN_UPDATE_CMS_FAIL: return updateCmsFail(state, action)
		default: return state
	}
}

export default reducer;