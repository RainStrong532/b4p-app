import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import test from '../fetchApi/home/test'

function* testAuth(action) {
    try {
        const data = yield test(action.payload)

        if (data.status != null) {
            console.warn("Login failure", data);
            yield put({
                type: types.TEST_FAILURE,
                payload: {
                    errorMessage: data.error
                }
            })
        } else {
            console.warn("Login succsess", data);
            yield put({
                type: types.TEST_SUCCSESS,
                payload: data
            })
        }
    } catch (error) {
        console.warn("Login failure", error);
        yield put({
            type: types.TEST_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const userSaga = [
    takeEvery(types.TEST_REQUEST, testAuth),
];