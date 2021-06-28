import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reduces/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const makeStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
  );

sagaMiddleware.run(watcherSaga);

export const wrapper = createWrapper(makeStore);
