import * as types from '../constants'

const DEFAULT_STATE = {
    jwt: null,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                jwt: null,
            }
        case types.LOGIN_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                jwt: action.payload,
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                jwt: null,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;
    }
}