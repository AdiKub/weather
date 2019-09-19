
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import mainReducer from './main/reducers';
import mainSaga from './main/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  applyMiddleware(
    sagaMiddleware,
  )
);

sagaMiddleware.run(mainSaga);

export default store