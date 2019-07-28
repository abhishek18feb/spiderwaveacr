import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	admintoken: null,
	userId: null,
	error: null,
	loading: false,
	forgotResponse: null,
	forgotResponseMsg:null,
	resetResponse:null,
	resetResponseMsg:null,
	authRedirectPath:"/"
};
const authStart=(state, action)=>{
	return updateObject(state, {error: null, loading:true})
}

const setAuthRedirectPath = (state,action)=>{
	return updateObject(state, {authRedirectPath: action.path})
}
const authSuccess = (state,action)=>{
	return updateObject(state, {
		admintoken: action.idToken,
		userId: action.userId,
		error: null,
		loading: false
	})
}

const authFail = (state, action)=>{
	return updateObject(state, {
		error: action.error,
		loading: false
	})
}

const authLogout = (state,action)=>{
	return updateObject (state, {admintoken:null, userId:null});
};

const setAuthForgotSuccess = (state,action)=>{
	return updateObject(state,{
		forgotResponse:action.forgotResponse,
		forgotResponseMsg:action.forgotResponseMsg
	});
};

const setAuthForgotFail = (state,action)=>{
	return updateObject(state,{
		forgotResponse:action.forgotResponse,
		forgotResponseMsg:action.forgotResponseMsg
	});
};
const setAuthResetSuccess=(state,action)=>{
	return updateObject(state,{
		resetResponse:action.resetResponse,
		resetResponseMsg:action.resetResponseMsg
	});
};
const setAuthResetFail=(state,action)=>{
	return updateObject(state, {
		resetResponse:action.resetResponse,
		resetResponseMsg:action.resetResponseMsg
	})
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.ADMIN_AUTH_START: return authStart(state,action);
		case actionTypes.ADMIN_AUTH_SUCCESS: return authSuccess(state,action);
		case actionTypes.ADMIN_AUTH_FAIL: return authFail(state, action);
		case actionTypes.ADMIN_AUTH_LOGOUT: return authLogout(state, action);
		case actionTypes.SET_ADMIN_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
		
		case actionTypes.ADMIN_AUTH_FORGOT_SUCCESS: return setAuthForgotSuccess(state, action);
		case actionTypes.ADMIN_AUTH_FORGOT_FAIL: return setAuthForgotFail(state, action);

		case actionTypes.ADMIN_RESET_SUCCESS: return setAuthResetSuccess(state, action);
		case actionTypes.ADMIN_RESET_FAIL: return setAuthResetFail(state, action);
		default: return state;
	}
}
export default reducer;
