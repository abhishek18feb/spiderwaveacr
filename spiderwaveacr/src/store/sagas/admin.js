import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* logoutSaga(action){
	yield call([localStorage, 'removeItem'], 'admintoken')
	yield call([localStorage, 'removeItem'], 'expirationTime')
	yield call([localStorage, 'removeItem'], 'userId')
	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action){  
	yield delay(action.expirationTime*1000)
	console.log(action.expirationTime);
	yield put(actions.logout());
}

export function* authUserSaga(action){
	yield put(actions.authStart())
	const authData = {
				"email":action.email,
				"password":action.password
			}
	let url = 'http://localhost:3300/admins/login';
	if(!action.isSignup){
		url = 'http://localhost:3300/admins/signup';
	}
	try{
		const response = yield axios.post(url, authData)
		const expirationTime = yield new Date(new Date().getTime()+response.data.expiresIn*1000);
		yield localStorage.setItem('admintoken', response.data.token);
		yield localStorage.setItem('expirationTime', expirationTime);
		yield localStorage.setItem('userId', response.data.data._id);
		yield put(actions.authSuccess(response.data.token,response.data.data._id));
		yield put(actions.checkAuthTimeout(response.data.expiresIn))
		yield put(actions.setAuthRedirectPath('/admin/dashboard'))
	}
	catch(error){
	 	//console.log(error.response.data.message);
		yield put(actions.authFail(error.response.data.message));
	}
}

export function* authForgotPwdSaga(action){
	const authData = {
				"email":action.email
			}
	let url = 'http://localhost:3300/admins/forgot_password';
	try{
		const response = yield axios.post(url, authData)
		console.log(response);
		yield put(actions.authForgotSuccess(response.data.success,response.data.message));
	}catch(error){
		yield put(actions.authForgotFail(null, error.response.data.message));
	}
}

export function* adminResetPasswordSaga(action){
	const authData={
		password:action.password,
		confirm_password:action.confirm_password,
		resetToken:action.resetToken
	}
	let url='http://localhost:3300/admins/reset_password'
	try{
		const response = yield axios.post(url, authData)
		yield put(actions.adminResetSuccess(response.data.success,response.data.message))
	}catch(error){
	 	console.log(error.response.data.message);
		yield put(actions.adminResetFail(null, error.response.data.message))
	}
}

export function* authCheckStateSaga(action){
	const admintoken = yield localStorage.getItem('admintoken')
	if(!admintoken){
		yield put(actions.logout())
	} else{
		const expirationDate = yield new Date(yield localStorage.getItem('expirationTime'))
		const newDate = new Date();
		if(expirationDate <= newDate){
			yield put(actions.logout())
		}else{
			const userId = yield localStorage.getItem('userId')
			yield put(actions.authSuccess(admintoken, userId))
			yield put(actions.checkAuthTimeout((expirationDate.getTime() -  new Date().getTime())/1000));
		}
	}
}