import * as actionTypes from './actionsTypes';
export const authStart =() =>{
	return {
		type: actionTypes.ADMIN_AUTH_START
	};
};

export const authSuccess=(token, userId)=>{
	return{
		type: actionTypes.ADMIN_AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail=(error)=>{
	console.log('error'+error)
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
