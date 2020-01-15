import { takeEvery, all, takeLatest, take } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionsTypes';
import * as userActionTypes from '../actions/front/actionsTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga,authForgotPwdSaga,adminResetPasswordSaga } from './admin';
import { updateSiteSettingSaga, fetchSiteSettingSaga } from './site_setting';
import {addCmsSaga, adminFetchCmsSaga, adminGetSingleCmsSaga, updateCmsSaga} from './cms';
import {addServiceSaga, adminFetchServiceSaga, adminGetSingleServiceSaga, updateServiceSaga} from './service';
import {userSignUpSaga, userLoginSaga, authUserCheckStateSaga, authUserLogoutSaga} from './Front/user';
import { customerFetchServiceSaga } from './Front/service';
import { addContactSaga } from './Front/contact';
import { adminFetchMessageSaga, adminDeleteMessageSaga, adminFetchSingleMessageSaga, adminUpdateMessageSaga } from './messages';

export function* watchAuth(){
	yield all([
		takeEvery(actionTypes.ADMIN_AUTH_INITIATE_LOGOUT, logoutSaga),
		takeEvery(actionTypes.ADMIN_AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
		takeEvery(actionTypes.ADMIN_AUTH_USER, authUserSaga),
		takeEvery(actionTypes.ADMIN_AUTH_CHECK_STATE, authCheckStateSaga),
		takeEvery(actionTypes.ADMIN_AUTH_FORGOT, authForgotPwdSaga),
		takeEvery(actionTypes.ADMIN_AUTH_RESET, adminResetPasswordSaga)
	]) 
	
}

export function* watchSiteSetting(){
	yield all([
		takeEvery(actionTypes.ADMIN_UPDATE_SITE_SETTING, updateSiteSettingSaga),
		takeEvery(actionTypes.ADMIN_FETCH_SITE_SETTING, fetchSiteSettingSaga)
	])
}

export function* watchCms(){
	yield all([
		takeEvery(actionTypes.ADMIN_ADD_CMS, addCmsSaga),
		takeEvery(actionTypes.ADMIN_FETCH_CMS, adminFetchCmsSaga),
		takeEvery(actionTypes.ADMIN_FETCH_SINGLE_CMS, adminGetSingleCmsSaga),
		takeEvery(actionTypes.ADMIN_UPDATE_CMS, updateCmsSaga)
	])
}

export function* watchService(){
	yield all([
		takeEvery(actionTypes.ADMIN_ADD_SERVICE, addServiceSaga),
		takeEvery(actionTypes.ADMIN_FETCH_SERVICE, adminFetchServiceSaga),
		takeEvery(actionTypes.ADMIN_FETCH_SINGLE_SERVICE, adminGetSingleServiceSaga),
		takeEvery(actionTypes.ADMIN_UPDATE_SERVICE, updateServiceSaga)
	])
}

export function* watchUser(){
	yield all([
		takeEvery(userActionTypes.USER_SIGNUP, userSignUpSaga),  
		takeEvery(userActionTypes.USER_LOGIN, userLoginSaga),
		takeEvery(userActionTypes.USER_AUTH_CHECK_STATE, authUserCheckStateSaga),
		takeEvery(userActionTypes.USER_AUTH_INITIATE_LOGOUT, authUserLogoutSaga),
		takeEvery(userActionTypes.CUSTOMER_FETCH_SERVICE, customerFetchServiceSaga)
	])
}

export function* watchContact(){
	yield all([
		takeEvery(userActionTypes.CUSTOMER_ADD_CONTACT, addContactSaga),
		takeEvery(actionTypes.ADMIN_FETCH_MESSAGES ,adminFetchMessageSaga),
		takeEvery(actionTypes.ADMIN_DELETE_MESSAGE, adminDeleteMessageSaga),
		takeEvery(actionTypes.ADMIN_FETCH_SINGLE_MESSAGE, adminFetchSingleMessageSaga),
		takeEvery(actionTypes.ADMIN_UPDATE_MESSAGE, adminUpdateMessageSaga),
	])
}

