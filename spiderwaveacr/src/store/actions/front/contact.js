import * as actionTypes from './actionsTypes';

export const customerAddContact = (ContactData) =>{
    return {
        type: actionTypes.CUSTOMER_ADD_CONTACT,
        ContactData:ContactData
    }
}

export const customerAddContactSuccess = (constactResponse, contactResponseMsg) =>{
    return {
        type: actionTypes.CUSTOMER_ADD_CONTACT_SUCCESS,
        constactResponse:constactResponse,
        contactResponseMsg:contactResponseMsg
    }
}

export const customerAddContactFail = (constactResponse, contactResponseMsg) => {
    return {
        type: actionTypes.CUSTOMER_ADD_CONTACT_FAIL,
        constactResponse: constactResponse,
        contactResponseMsg: contactResponseMsg
    }
} 