import * as actionTypes from './actionsTypes';

export const userSingup = (signupData) =>{
    console.log(signupData);
    return {
        type: actionTypes.USER_SIGNUP,
        signupData:signupData
    }
}

export const authStart =() =>{
	return {
		type: actionTypes.USER_AUTH_START
	};
};
export const userSignupSuccess = (userToken, userId) => {
    return {
        type:actionTypes.USER_SIGNUP_SUCCESS,
        userToken:userToken,
        userId:userId
    }
}

export const userSignupFail = (error) =>{
    return {
        type: actionTypes.USER_SINGUP_FAIL,
        error:error
    }
}

export const checkAuthTimeout = (expirationTime)=>{
	return {
		type: actionTypes.USER_AUTH_CHECK_TIMEOUT,
		expirationTime: expirationTime
	};
};

export const setAuthRedirectPath = (path)=>{
	return {
		type: actionTypes.SET_USER_AUTH_REDIRECT_PATH,
		path: path
	}
}

export const authCheckState = () => {
	return{
		type: actionTypes.USER_AUTH_CHECK_STATE
	}
}
