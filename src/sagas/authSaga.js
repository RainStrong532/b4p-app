import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import getMyInfoApi from '../fetchApi/auth/getMyInfo'

function* getMyInfo() {
    try {
        let token = "Bearer ";
        token += yield AsyncStorage.getItem("userToken");
        const data = yield getMyInfoApi(token)
        console.warn("get my info api: ", data);
        if (data.id == null || data.id == undefined) {
            yield put({
                type: types.GET_POST_FAILURE,
                payload: {
                    errorMessage: data
                }
            })
        } else {
            yield put({
                type: types.GET_MYINFO_SUCCSESS,
                payload: data
            })
        }
    } catch (error) {
        console.warn("get my info api: ", error);
        yield put({
            type: types.GET_MYINFO_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const AuthSaga = [
    takeEvery(types.GET_MYINFO_REQUEST, getMyInfo),
];