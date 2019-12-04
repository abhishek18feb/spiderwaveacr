import * as actionTypes from './actionsTypes';


export const setTosterMessage = (message, success, error)=>{
    return {
        type: actionTypes.DISPLAY_TOSTER,
        message:message,
        success:success,
        error:error
    }
}
export const resetTosterMessage = ()=>{
    return {
        type: actionTypes.TOSTER_MESSAGE_RESET
    }
}