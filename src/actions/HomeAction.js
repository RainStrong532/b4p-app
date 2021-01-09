import * as types from '../constants'
export function test(payload) {
    return ({
        type: types.TEST_REQUEST,
        payload
    })
}