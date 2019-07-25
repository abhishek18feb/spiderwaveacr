import { takeEvery, all, takeLatest } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionsTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './admin';

export function* watchAuth(){
	yield all([
		takeEvery(actionTypes.ADMIN_AUTH_INITIATE_LOGOUT, logoutSaga),
		takeEvery(actionTypes.ADMIN_AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
		takeEvery(actionTypes.ADMIN_AUTH_USER, authUserSaga),
		takeEvery(actionTypes.ADMIN_AUTH_CHECK_STATE, authCheckStateSaga)
	])
	
}