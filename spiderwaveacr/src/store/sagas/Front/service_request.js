import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../../actions/front/index';
import axios from '../../../axios';

export function* addServiceRequestSaga(action){
    let url = '/service_request/add_service_request' 
    try{
        const response = yield axios({
            url:url,
            method:'post',
            data:action.RequestData,
        })
        console.log(response)
        
 
		yield put(actions.addServiceRequestSuccess(true, response.data.message)); 
		yield put(actions.setTosterMessage("Thank you for your request. Soon our representative will contact you.", true, false))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
        yield put(actions.addServiceRequestSuccess(null, response.data.message)); 
    }catch(error){
        yield put(actions.addServiceRequestFail(error.response.data.message));
        yield put(actions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }

}