import { ADD_NAME, ADD_MOBILE_NUMBER } from '../../../actionTypes';

export function addName(name) {
    return {
        type: ADD_NAME,
        payload: name
    }
}
export function addMobileNumber(mobileNumber) {
    return {
        type: ADD_MOBILE_NUMBER,
        payload: mobileNumber
    }
};
