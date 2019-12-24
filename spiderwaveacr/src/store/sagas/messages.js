import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../actions/index';
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