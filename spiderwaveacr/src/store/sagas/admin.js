import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* logoutSaga(action){
	yield call([localStorage, 'removeItem'], 'token')
	yield call([localStorage, 'removeItem'], 'expirationTime')
	yield call([localStorage, 'removeItem'], 'userId')
	yield call([localStorage, 'removeItem'], 'token')
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
		console.log(action.isSignup);
		if(!action.isSignup){
			url = 'http://localhost:3300/admins/signup';
		}
		console.log(authData);
		try{
			const response = yield axios.post(url, authData)
			const expirationTime = yield new Date(new Date().getTime()+response.data.expiresIn*1000);
			yield localStorage.setItem('token', response.data.token);
			yield localStorage.setItem('expirationTime', expirationTime);
			yield localStorage.setItem('userId', response.data.data._id);
			yield put(actions.authSuccess(response.data.token,response.data.data._id));
			yield put(actions.checkAuthTimeout(response.data.expiresIn))
		}
		catch(error){
			// if (error.response) {
		 //      console.log(error.response.data.error);
		 //      console.log(error.response.status);
		 //      console.log(error.response.headers);
		 //    }
			yield put(actions.authFail(error.response.data.error));
		}
}

export function* authCheckStateSaga(action){
	const token = yield localStorage.getItem('token')
	if(!token){
		yield put(actions.logout())
	} else{
		const expirationDate = yield new Date(yield localStorage.getItem('expirationTime'))
		const newDate = new Date();
		if(expirationDate <= newDate){
			yield put(actions.logout())
		}else{
			const userId = yield localStorage.getItem('userId')
			yield put(actions.authSuccess(token, userId))
			yield put(actions.checkAuthTimeout((expirationDate.getTime() -  new Date().getTime())/1000));
		}
	}
}