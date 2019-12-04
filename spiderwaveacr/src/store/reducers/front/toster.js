import * as actionTypes from '../../actions/front/actionsTypes';
import {updateObject} from '../../../shared/utility';
import { stat } from 'fs';

const initialState={
	message: null,
	success: null,
	error: null
};

const setTosterMessage = (state, action)=>{
    return updateObject(state, {
        message: action.message,
        success: action.success,
        error: action.error,
    })
}
const resetTosterMessage=(state, action)=>{
    return updateObject(state, {
        message:null,
        success:null,
        error:null
    })
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.DISPLAY_TOSTER: return setTosterMessage(state, action);
        case actionTypes.TOSTER_MESSAGE_RESET: return resetTosterMessage(state, action);
        default: return state;
    }
    
}

export default reducer;