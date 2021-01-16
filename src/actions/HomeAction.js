import * as types from '../constants'
export function test(payload) {
    return ({
        type: types.TEST_REQUEST,
        payload
    })
}

export function getPosts(payload) {
    return ({
        type: types.GET_POST_REQUEST,
        payload
    })
}
export function createPosts(payload) {
    return ({
        type: types.CREATE_POST_REQUEST,
        payload
    })
}
export function deletePost(payload) {
    return ({
        type: types.DELETE_POST_REQUEST,
        payload
    })
}
export function updatePost(payload) {
    return ({
        type: types.UPDATE_POST_REQUEST,
        payload
    })
}