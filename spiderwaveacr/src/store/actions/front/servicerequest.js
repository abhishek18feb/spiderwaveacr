import * as actionTypes from './actionsTypes';

export const ServiceRequest = (RequestData) =>{
    return {
        type: actionTypes.ADD_SERVICE_REQUEST,
        RequestData:RequestData
    }
}

export const addServiceRequestSuccess = (serviceRequestResponse, serviceRequestResponseMsg) =>{
    return {
        type: actionTypes.ADD_SERVICE_REQUEST_SUCCESS,
        serviceRequestResponse:serviceRequestResponse,
        serviceRequestResponseMsg:serviceRequestResponseMsg
    }
}

export const addServiceRequestFail = (serviceRequestResponse, serviceRequestResponseMsg) => {
    return {
        type: actionTypes.ADD_SERVICE_REQUEST_FAIL,
        serviceRequestResponse:serviceRequestResponse,
        serviceRequestResponseMsg:serviceRequestResponseMsg
    }
} 