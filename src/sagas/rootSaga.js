import { all } from 'redux-saga/effects'
import { AuthSaga } from './authSaga';
import { userSaga } from './usersSaga';

function* rootSaga() {
    yield all([
        ...AuthSaga,
        ...userSaga
    ]);
}
export default rootSaga;