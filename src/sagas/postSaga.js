import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeEvery } from 'redux-saga/effects'
import * as types from '../constants'
import getPostsApi from '../fetchApi/home/getPosts'
import deletePostApi from '../fetchApi/home/deletePost'
import updatePostApi from '../fetchApi/home/updatePost'

function* getPosts(action) {
    try {
        let token = "Bearer ";
        token += yield AsyncStorage.getItem("userToken");
        const data = yield getPostsApi(action.payload, token)
        if (data.length != null) {
            yield put({
                type: types.GET_POST_SUCCSESS,
                payload: data
            })
        } else {
            yield put({
                type: types.GET_POST_FAILURE,
                payload: {
                    errorMessage: data.message
                }
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

function* deletePost(action) {
    try {
        let token = "Bearer ";
        token += yield AsyncStorage.getItem("userToken");
        const data = yield deletePostApi(action.payload, token)
        if (data.id != null) {
            yield put({
                type: types.DELETE_POST_SUCCSESS,
                payload: data
            })
            yield put({
                type: types.GET_POST_REQUEST,
                payload: {
                    pageNo: 0
                }
            })
        } else {
            yield put({
                type: types.DELETE_POST_FAILURE,
                payload: {
                    errorMessage: data.message
                }
            })
            yield put({
                type: types.GET_POST_REQUEST,
                payload: {
                    pageNo: 0
                }
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_POST_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* updatePost(action) {
    try {
        let token = "Bearer ";
        token += yield AsyncStorage.getItem("userToken");
        const data = yield updatePostApi(action.payload, token)
        if (data.id) {
            yield put({
                type: types.UPDATE_POST_SUCCSESS,
                payload: data
            })
            yield put({
                type: types.GET_POST_REQUEST,
                payload: {
                    pageNo: 0
                }
            })
        } else {
            yield put({
                type: types.UPDATE_POST_FAILURE,
                payload: {
                    errorMessage: data.message
                }
            })
        }
    } catch (error) {
        yield put({
            type: types.DELETE_POST_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
export const postSaga = [
    takeEvery(types.GET_POST_REQUEST, getPosts),
    takeEvery(types.DELETE_POST_REQUEST, deletePost),
    takeEvery(types.UPDATE_POST_REQUEST, updatePost),
    takeEvery(types.DELETE_POST_REQUEST, deletePost),
];