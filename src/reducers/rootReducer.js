import { combineReducers } from 'redux'
import test from './usersReducer'
import jwt from './authReducer'
import posts from './postsReducer'

export default combineReducers({
    test: test,
    auth: jwt,
    posts: posts
})