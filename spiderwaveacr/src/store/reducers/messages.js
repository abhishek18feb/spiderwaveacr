import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../shared/utility';

const initialState={
	messageResponse:null,
	messageResponseMsg:null,
	singleMessageResponse:null,
	singleMessageResponseMsg:null,
	messageError:null,
	updateMessageResponse:null,
	updateMessageResponseMsg:null
}

const fetchMessageSuccess = (state,action) =>{
	return updateObject(state, {
            messageResponse: action.messageResponse,
			messageResponseMsg:action.messageResponseMsg,
			updateMessageResponse:null,
			updateMessageResponseMsg:null,
			messageError:null		
		});
};

const fetchMessageFail = (state, action)=>{
	return updateObject(state, {
		messageResponse: null,
		messageResponseMsg: action.messageResponseMsg,
		updateMessageResponse:null,
		updateMessageResponseMsg:null,
		messageError: true
	});
};

const fetchSingleMessageSuccess = (state,action) =>{
	console.log(action);
	return updateObject(state, {
			singleMessageResponse: action.messageResponse,
			singleMessageResponseMsg:action.messageResponseMsg,
			messageError:null		
		});
};

const fetchSingleMessageFail = (state, action)=>{
	return updateObject(state, {
		singleMessageResponse: null,
		singleMessageResponseMsg: action.messageResponseMsg,
		messageError: true
	});
};

const updateMessageSuccess = (state,action) =>{
	return updateObject(state, {
			updateMessageResponse: true,
			updateMessageResponseMsg:action.updateMessageResponseMsg,
			messageError:null		
		});
};

const updateMessageFail = (state, action)=>{
	return updateObject(state, {
		updateMessageResponse: false,
		updateMessageResponseMsg: action.updateMessageResponseMsg,
		messageError: true
	});
};

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.ADMIN_FETCH_MESSAGE_SUCCESS: return fetchMessageSuccess(state, action)
		case actionTypes.ADMIN_FETCH_MESSAGE_FAIL: return fetchMessageFail(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_MESSAGE_SUCCESS: return fetchSingleMessageSuccess(state, action)
		case actionTypes.ADMIN_FETCH_SINGLE_MESSAGE_FAIL: return fetchSingleMessageFail(state, action)
        case actionTypes.ADMIN_UPDATE_MESSAGE_SUCCESS: return updateMessageSuccess(state, action)
		case actionTypes.ADMIN_UPDATE_MESSAGE_FAIL: return updateMessageFail(state, action)
		default: return state
	}
}

export default reducer;