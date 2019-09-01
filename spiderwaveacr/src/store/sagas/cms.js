import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios';

export function* addCmsSaga(action){
	let url = '/cms/addCms'
	try{
		const response = yield axios({
			method:'post',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(actions.addCmsSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(actions.addCmsSuccess(null, error.response.data.message));
	}
} 

export function* adminFetchCmsSaga(action){
	let url = "/cms/"
	try{
		const response = yield axios({
			method:'get',
			url:url,
			headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		yield put(actions.adminFetchCmsSuccess(response.data.data, response.data.message))
	}catch(error){
		console.log(error);
		yield put(actions.adminFetchCmsFail(null, error.response.data.message))
	}
}

export function* adminGetSingleCmsSaga(action){
	let url = "/cms/get_single_cms/"+action.id
	try {
		const response = yield axios({
			method:'get',
			url:url,
			headers:{'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response);
		yield put(actions.adminGetSingleCmsSuccess(response.data.data, response.data.message))
	}catch(error){
		console.log(error)
		yield put(actions.adminGetSingleCmsFail(null, error.response.data.message))
	}
}

export function* updateCmsSaga(action){
	let url = "/cms/update_cms/"+action.id
	try{
		const response = yield axios({
			method:'patch',
			url:url, 
			data: action.formData,
			headers: {'Authorization': 'Berear '+action.adminToken}
		})
		console.log(response); 
		yield put(actions.updateCmsSuccess(response.data.data, response.data.message));
	}catch(error){
		console.log(error);
		yield put(actions.updateCmsFail(null, error.response.data.message));
	}
}

