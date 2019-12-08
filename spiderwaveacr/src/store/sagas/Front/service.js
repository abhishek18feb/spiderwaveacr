import {put, delay, call} from 'redux-saga/effects';
import * as actions from '../../actions/front/index';
import axios from '../../../axios';

export function* customerFetchServiceSaga(action){
	let url = "/service/"
	try{
		const response = yield axios({
			method:'get',
			url:url,
			//headers:  {'Authorization': 'Berear '+action.adminToken}
		})
		//console.log(response);
		yield put(actions.customerFetchServiceSuccess(response.data.data, response.data.message))
	}catch(error){
		//console.log(error);
		yield put(actions.customerFetchServiceFail(null, error.response.data.message))
	}
}