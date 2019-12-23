import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../../actions/front/index';
import axios from '../../../axios';

export function* userSignUpSaga(action){
    yield put(actions.authStart())
    let url = '/users/signup' 
    try{
        const response = yield axios({
            url:url,
            method:'post',
            data:action.signupData,
        })
        console.log(response)
        const expirationTime = yield new Date(new Date().getTime()+response.data.expiresIn*1000);
        yield localStorage.setItem('customerToken', response.data.token);
		yield localStorage.setItem('expirationTime', expirationTime);
        yield localStorage.setItem('userId', response.data._id);
        yield localStorage.setItem('customerName', response.data.data.name);
        yield localStorage.setItem('customerMobile', response.data.data.mobile);
		yield put(actions.userSignupSuccess(response.data.token,response.data.data._id));
		yield put(actions.checkAuthTimeout(response.data.expiresIn)) 
        yield put(actions.setAuthRedirectPath('/')) 
        yield put(actions.setTosterMessage("SignUp Successful", true, false))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }catch(error){
        yield put(actions.userSignupFail(error.response.data.message));
        yield put(actions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }
}


export function* userLoginSaga(action){
    yield put(actions.authStart())
    let url = '/users/login' 
    try{
        const response = yield axios({
            url:url,
            method:'post',
            data:action.loginData,
        })
        console.log(response)
        const expirationTime = yield new Date(new Date().getTime()+response.data.expiresIn*1000);
        yield localStorage.setItem('customerToken', response.data.token);
		yield localStorage.setItem('customerTokenExpirationTime', expirationTime);
        yield localStorage.setItem('customerId', response.data.data._id);
        yield localStorage.setItem('customerName', response.data.data.name);
        yield localStorage.setItem('customerMobile', response.data.data.mobile);
        yield put(actions.userLoginSuccess(response.data.token,response.data.data._id));
        yield put(actions.checkAuthTimeout(response.data.expiresIn)) 
        yield put(actions.setAuthRedirectPath('/')) 
        yield put(actions.setTosterMessage("Login Successful", true, false))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }catch(error){
        yield put(actions.userLoginFail(error.response.data.message));
        yield put(actions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }
}

export function* authUserCheckStateSaga(action){ 
    console.log('Customer Check Auth State Saga')
	const usertoken = yield localStorage.getItem('customerToken')
	if(!usertoken){
		yield put(actions.logout()) 
	} else{
		const expirationDate = yield new Date(yield localStorage.getItem('customerTokenExpirationTime'))
		const newDate = new Date();
		if(expirationDate <= newDate){
			yield put(actions.logout())
		}else{
			const userId = yield localStorage.getItem('userId')
			yield put(actions.userLoginSuccess(usertoken, userId))
			yield put(actions.checkAuthTimeout((expirationDate.getTime() -  new Date().getTime())/1000));
		}
	}
}

export function* authUserLogoutSaga(action){
    const customerToken = yield localStorage.getItem('customerToken')
    if(customerToken){
        yield put(actions.userLogoutSucceed());
        yield put(actions.setTosterMessage("Session Expires", true, false))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }
    yield call([localStorage, 'removeItem'], 'customerToken')
	yield call([localStorage, 'removeItem'], 'customerTokenExpirationTime')
    yield call([localStorage, 'removeItem'], 'customerId')
    yield call([localStorage, 'removeItem'], 'customerName')
    yield call([localStorage, 'removeItem'], 'customerMobile')
}

