import { all } from 'redux-saga/effects'
import { AuthSaga } from './authSaga';
import { userSaga } from './usersSaga';
import { postSaga } from './postSaga';

function* rootSaga() {
    yield all([
        ...AuthSaga,
        ...userSaga,
        ...postSaga
    ]);
}
export default rootSaga;