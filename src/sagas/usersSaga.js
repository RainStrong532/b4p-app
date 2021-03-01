import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import test from '../fetchApi/home/test'

function* testAuth(action) {
    try {
        const data = yield test(action.payload)

        if (data.status != null) {
            yield put({
                type: types.TEST_FAILURE,
                payload: {
                    errorMessage: data.error
                }
            })
        } else {
            yield put({
                type: types.TEST_SUCCSESS,
                payload: data
            })
        }
    } catch (error) {
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