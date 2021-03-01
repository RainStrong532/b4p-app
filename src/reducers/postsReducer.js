import * as types from '../constants'
const DEFAULT_STATE = {
    listData: null,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_POST_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                listData: action.payload,
            }
        case types.CREATE_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.CREATE_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.CREATE_POST_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.CREATE_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.DELETE_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.DELETE_POST_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.UPDATE_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.UPDATE_POST_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.UPDATE_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.DELETE_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.DELETE_POST_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;
    }
}