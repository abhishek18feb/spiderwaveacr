import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as tosterActions from '../actions/front/index';
import axios from '../../axios';

export function* adminFetchMessageSaga(action){
	let url = "/contact/"
	//console.log('action value in saga '+action.page)
	try{
		const response = yield axios({
			method:'get',
			url:url,
			params: {page:action.page},
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		//console.log(response);
		yield put(actions.adminFetchMessageSuccess(response.data.data, response.data.message))
	}catch(error){
		//console.log(error);
		yield put(actions.adminFetchMessageFail(null, error.response.data.message)) 
	}
}

export function* adminFetchSingleMessageSaga(action){
	let url = `/contact/get_single_contact/${action.id}`

	try{
		const response = yield axios({
			method:'get',
			url:url,
			headers: {'Authorization':'Berear '+action.adminToken}
		}) 
		yield put(actions.adminGetSingleMessageSuccess(response.data.result, response.data.message))
	}catch(error){
		yield put(actions.adminGetSingleMessageFail(null, 'Unable to fetch data')) 
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

export function* adminUpdateMessageSaga(action){
	let url = "/contact/update_contact/"+action.id
	console.log(action)
	try{
		const response = yield axios({
			method:'patch',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(tosterActions.setTosterMessage("Message Updated Successfully", true, false))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
		yield put(actions.updateMessageSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(tosterActions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
		yield put(actions.updateMessageFail(null, error.response.data.message));
		
	}
}