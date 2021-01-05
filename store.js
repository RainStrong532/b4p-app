import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;