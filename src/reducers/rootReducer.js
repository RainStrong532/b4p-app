import { combineReducers } from 'redux'
import test from './usersReducer'
import jwt from './authReducer'

export default combineReducers({
    test: test,
    auth: jwt
})