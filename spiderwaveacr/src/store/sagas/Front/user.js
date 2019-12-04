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
        yield localStorage.setItem('usertoken', response.data.token);
		yield localStorage.setItem('expirationTime', expirationTime);
		yield localStorage.setItem('userId', response.data.data._id);
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

