import * as actionTypes from './actionsTypes';
export const authStart =() =>{
	return {
		type: actionTypes.ADMIN_AUTH_START
	};
};

export const authSuccess=(admintoken, userId)=>{ 
	return{
		type: actionTypes.ADMIN_AUTH_SUCCESS,
		idToken: admintoken,
		userId: userId
	};
};

export const authFail=(error)=>{
	console.log('action'+error)
	return {
		type: actionTypes.ADMIN_AUTH_FAIL,
		error: error
	};
};

export const logout =()=>{
	// localStorage.removeItem('token')
	// localStorage.removeItem('expirationTime')
	// localStorage.removeItem('userId')
	return{
		type: actionTypes.ADMIN_AUTH_INITIATE_LOGOUT
	}
}

export const logoutSucceed = () =>{
	return {
		type: actionTypes.ADMIN_AUTH_LOGOUT
	};
}

export const checkAuthTimeout = (expirationTime)=>{
	return {
		type: actionTypes.ADMIN_AUTH_CHECK_TIMEOUT,
		expirationTime: expirationTime
	};
};

export const auth = (email, password, isSignup)=>{
	return {
		type: actionTypes.ADMIN_AUTH_USER,
		email: email,
		password: password,
		isSignup: isSignup  
	};
};

export const authForgotPwd = (email)=>{
	return {
		type: actionTypes.ADMIN_AUTH_FORGOT,
		email:email
	}
}
export const authForgotSuccess=(forgotResponse,forgotResponseMsg)=>{
	return{
		type: actionTypes.ADMIN_AUTH_FORGOT_SUCCESS,
		forgotResponse:forgotResponse,
		forgotResponseMsg:forgotResponseMsg
	}
}
export const authForgotFail=(forgotResponse,forgotResponseMsg)=>{
	return {
		type:actionTypes.ADMIN_AUTH_FORGOT_FAIL,
		forgotResponse:forgotResponse,
		forgotResponseMsg:forgotResponseMsg
	}
}
export const adminResetPassword=(password, confirm_password,resetToken)=>{
	return {
		type:actionTypes.ADMIN_AUTH_RESET,
		password:password,
		confirm_password:confirm_password,
		resetToken:resetToken
	};
};
export const adminResetSuccess=(resetResponse, resetResponseMsg)=>{
	return {
		type:actionTypes.ADMIN_RESET_SUCCESS,
		resetResponse:resetResponse,
		resetResponseMsg:resetResponseMsg
	};
};
export const adminResetFail=(resetResponse, resetResponseMsg)=>{
	return {
		type:actionTypes.ADMIN_RESET_FAIL,
		resetResponse:resetResponse,
		resetResponseMsg:resetResponseMsg
	};
};

export const setAuthRedirectPath = (path)=>{
	return {
		type: actionTypes.SET_ADMIN_AUTH_REDIRECT_PATH,
		path: path
	}
}

export const authCheckState = () => {
	return{
		type: actionTypes.ADMIN_AUTH_CHECK_STATE
	}
}


