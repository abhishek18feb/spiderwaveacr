import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* addServiceSaga(action){
	let url = 'http://localhost:3300/service/addService'
	try{
		const response = yield axios({
			method:'post',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(actions.addServiceSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(actions.addServiceFail(null, error.response.data.message));
	}
} 

export function* adminFetchServiceSaga(action){
	let url = "http://localhost:3300/service/"
	try{
		const response = yield axios({
			method:'get',
			url:url,
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		yield put(actions.adminFetchServiceSuccess(response.data.data, response.data.message))
	}catch(error){
		console.log(error);
		yield put(actions.adminFetchServiceFail(null, error.response.data.message))
	}
}

export function* adminGetSingleServiceSaga(action){
	let url = "http://localhost:3300/cms/get_single_service/"+action.id
	try {
		const response = yield axios({
			method:'get',
			url:url,
			headers:{'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		yield put(actions.adminGetSingleServiceSuccess(response.data.data, response.data.message))
	}catch(error){
		console.log(error)
		yield put(actions.adminGetSingleServiceFail(null, error.response.data.message))
	}
}

export function* updateServiceSaga(action){
	let url = "http://localhost:3300/service/update_service/"+action.id
	try{
		const response = yield axios({
			method:'patch',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(actions.updateServiceSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(actions.updateServiceFail(null, error.response.data.message));
	}
}

