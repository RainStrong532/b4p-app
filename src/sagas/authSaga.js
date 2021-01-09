import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import login from '../fetchApi/auth/login'

function* loginToApp(action) {
    try {
        const data = yield login(action.payload)

        if (data.status != null) {
            console.warn("Login failure", data);
            yield put({
                type: types.LOGIN_FAILURE,
                payload: {
                    errorMessage: data.error
                }
            })
        } else {
            console.warn("Login succsess");
            yield put({
                type: types.LOGIN_SUCCSESS,
                payload: data
            })
        }
    } catch (error) {
        console.warn("Login failure", error);
        yield put({
            type: types.LOGIN_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const AuthSaga = [
    takeEvery(types.LOGIN_REQUEST, loginToApp),
];