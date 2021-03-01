import * as types from '../constants'
export function login(payload) {
    return ({
        type: types.LOGIN_REQUEST,
        payload
    })
}
export function test(payload) {
    return ({
        type: types.TEST_REQUEST,
        payload
    })
}
export function getMyInfo() {
    return ({
        type: types.GET_MYINFO_REQUEST,
    })
}