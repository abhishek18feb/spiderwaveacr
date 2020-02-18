import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as tosterActions from '../actions/front/index';
import axios from '../../axios';

export function* adminFetchServiceReqSaga(action){
	let url = "/service_request/"
	//console.log('action value in saga '+action.page)
	try{
		const response = yield axios({
			method:'get',
			url:url,
			params: {page:action.page},
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		//console.log(response);
		yield put(actions.adminFetchServiceReqSuccess(response.data.data, response.data.message))
	}catch(error){
		//console.log(error);
		yield put(actions.adminFetchServiceReqFail(null, error.response.data.message)) 
	}
}

export function* adminFetchSingleServiceReqSaga(action){
	let url = `/service_request/get_single_service_request/${action.id}`

	try{
		const response = yield axios({
			method:'get',
			url:url,
			headers: {'Authorization':'Berear '+action.adminToken}
		}) 
		yield put(actions.adminGetSingleServiceReqSuccess(response.data.result, response.data.message))
	}catch(error){
		yield put(actions.adminGetSingleServiceReqFail(null, 'Unable to fetch data')) 
	} 
}

export function* adminDeleteServiceReqSaga(action){
	let url = `/service_request/delete_service_request/${action.id}`
	console.log('action value in saga '+action.id)
	try{
		const response = yield axios({
			method:'delete',
			url:url,
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		//yield put(actions.adminFetchMessageSuccess(response.data.data, response.data.message))
		yield put(tosterActions.setTosterMessage("Data Deleted Successfully", true, false))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
	}catch(error){
		console.log(error);
		yield put(actions.deleteServiceReqFail(null, error.response.data.message)) 
		yield put(tosterActions.setTosterMessage("Something went wrong", false, true))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
	}
}

export function* adminUpdateServiceReqSaga(action){
	let url = "/service_request/update_service_request/"+action.id
	console.log(action)
	try{
		const response = yield axios({
			method:'patch',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(tosterActions.setTosterMessage("Service Request Updated Successfully", true, false))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
		yield put(actions.updateServiceReqSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(tosterActions.setTosterMessage(error.response.data.message, false, true))
        yield delay(6000) 
        yield put(tosterActions.resetTosterMessage(null))
		yield put(actions.updateServiceReqFail(null, error.response.data.message));
		
	}
}