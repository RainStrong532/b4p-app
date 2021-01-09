import * as types from '../constants'
const DEFAULT_STATE = {
    messageResponse: null,
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.TEST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.TEST_SUCCSESS:
            console.warn("res: ", action.payload);
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null,
                messageResponse: action.payload,
            }
        case types.TEST_FAILURE:
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