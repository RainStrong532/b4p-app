import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import getPostsApi from '../fetchApi/home/getPosts'

function* getPosts(action) {
    try {
        let token = "Bearer ";
        token += yield AsyncStorage.getItem("userToken");
        const data = yield getPostsApi(action.payload, token)
        console.warn("res: ", data);
        if (data.length != null) {
            yield put({
                type: types.GET_POST_SUCCSESS,
                payload: data
            })
        } else {
            console.warn("Login succsess", data);
            yield put({
                type: types.GET_POST_FAILURE,
                payload: {
                    errorMessage: data.message
                }
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

export const postSaga = [
    takeEvery(types.GET_POST_REQUEST, getPosts),
];