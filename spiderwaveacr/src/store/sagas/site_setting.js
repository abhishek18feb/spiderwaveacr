import { put, delay, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* updateSiteSettingSaga(action){
	// const formData = {
	// 			"formData":action.formData
	// 		}
	let url = 'http://localhost:3300/site-setting/update_site_setting';
	console.log(action.formData)
	try{
		const response = yield axios({
									method:'post',
									url:url, 
									data: action.formData,
									headers: {'Authorization': 'Berear '+action.adminToken}})
		console.log(response);
		//yield put(actions.authForgotSuccess(response.data.success,response.data.message));
	}catch(error){
		//yield put(actions.authForgotFail(null, error.response.data.message));
	}
}