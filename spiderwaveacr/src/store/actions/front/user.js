import * as actionTypes from './actionsTypes';

export const userLogin = (loginData) => {
    console.log(loginData);
    return {
        type: actionTypes.USER_LOGIN,
        loginData:loginData
    }
}

export const userLoginSuccess = (userToken, userId) => {
    return {
        type:actionTypes.USER_LOGIN_SUCCESS,
        userToken:userToken,
        userId:userId
    }
}

export const userLoginFail = (error) =>{
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        error:error
    }
}

export const userSingup = (signupData) =>{
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

export const logout =()=>{
	// localStorage.removeItem('token')
	// localStorage.removeItem('expirationTime')
	// localStorage.removeItem('userId')
	return{
		type: actionTypes.USER_AUTH_INITIATE_LOGOUT
	}
}

export const userLogoutSucceed = () =>{
	return {
		type: actionTypes.USER_AUTH_LOGOUT
	};
}
