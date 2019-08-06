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
		yield put(actions.updateSiteSettingSuccess(response.data.siteSetting,response.data.message));
	}catch(error){
		console.log(error.response.data)
		yield put(actions.updateSiteSettingFail(null, error.response.data.message));
	}
}
export function* fetchSiteSettingSaga(action){
	let url = 'http://localhost:3300/site-setting/fetch_site_setting';
	try{
		const response = yield axios({
			method:'post',
			url:url,
			//data: action.adminToken,
			headers:{'Authorization':'Berear '+action.adminToken}
		})
		console.log(response)
		yield put(actions.fetchSiteSettingSuccess(response.data.siteSetting,response.data.message))
	}catch(error){
		console.log(error.response.data)
		yield put(actions.fetchSiteSettingFail(null, error.response.data.message))
	}
}