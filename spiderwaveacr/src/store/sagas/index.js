import { takeEvery, all, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionsTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga,authForgotPwdSaga,adminResetPasswordSaga } from './admin';
import { updateSiteSettingSaga, fetchSiteSettingSaga } from './site_setting';
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