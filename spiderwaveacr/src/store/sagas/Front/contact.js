import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../../actions/front/index';
import axios from '../../../axios';

export function* addContactSaga(action){
    let url = '/contact/addContact' 
    try{
        const response = yield axios({
            url:url,
            method:'post',
            data:action.ContactData,
        })
        console.log(response)
        
 
		yield put(actions.customerAddContactSuccess());
		yield put(actions.setTosterMessage("Thank you for contact with us. Soon our representative will contact you.", true, false))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }catch(error){
        yield put(actions.customerAddContactFail(error.response.data.message));
        yield put(actions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(actions.resetTosterMessage(null))
    }

}