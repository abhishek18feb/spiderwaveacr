import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as tosterActions from '../actions/front/index';
import axios from '../../axios';

export function* adminFetchMessageSaga(action){
	let url = "/contact/"
	console.log('action value in saga '+action.page)
	try{
		const response = yield axios({
			method:'get',
			url:url,
			params: {page:action.page},
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		yield put(actions.adminFetchMessageSuccess(response.data.data, response.data.message))
	}catch(error){
		console.log(error);
		yield put(actions.adminFetchMessageFail(null, error.response.data.message)) 
	}
}

export function* adminDeleteMessageSaga(action){
	let url = `/contact/delete_contact/${action.id}`
	console.log('action value in saga '+action.id)
	try{
		const response = yield axios({
			method:'delete',
			url:url,
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		//yield put(actions.adminFetchMessageSuccess(response.data.data, response.data.message))
		yield put(tosterActions.setTosterMessage("Message Deleted Successfully", true, false))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
	}catch(error){
		console.log(error);
		yield put(actions.deleteMessageFail(null, error.response.data.message)) 
		yield put(tosterActions.setTosterMessage("Something went wrong", false, true))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
	}
}