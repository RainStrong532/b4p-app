import * as types from '../constants'

const DEFAULT_STATE = {
    myInfo: null,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_MYINFO_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_MYINFO_SUCCSESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                myInfo: action.payload,
            }
        case types.GET_POST_FAILURE:
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