import * as actionTypes from '../../actions/front/actionsTypes';
import {updateObject} from '../../../shared/utility';
import { stat } from 'fs';

const initialState={
	userToken: null,
	userId: null,
	error: null,
	loading: false,
	forgotResponse: null,
	forgotResponseMsg:null,
	resetResponse:null,
	resetResponseMsg:null,
    authRedirectPath:"/",
    expirationTime:null,
    displaySessionMessage:false
};

const authStart=(state, action)=>{
	return updateObject(state, {error: null, loading:true})
}

const setAuthRedirectPath = (state,action)=>{
	return updateObject(state, {authRedirectPath: action.path})
}

const userSignupSuccess = (state, action)=>{
    return updateObject(state, {
        userToken: action.userToken,
        userId: action.userId,
        error:null,
        loading:false,
        displaySessionMessage:"Signup Successfully"
    })
}

const userSignupFail = (state, action) => {
    return updateObject (state, {
        error:action.error,
        loading:false
    })
}

const checkAuthTimeout = (state, action)=>{
    return updateObject(state,{
        expirationTime:action.expirationTime
    })
}


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.USER_AUTH_START: return authStart(state, action);
        case actionTypes.USER_SIGNUP_SUCCESS: return userSignupSuccess(state, action);
        case actionTypes.USER_SINGUP_FAIL: return userSignupFail(state, action);
        default: return state;
    }
    
}

export default reducer;