import { createStore, compose, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reduces/rootReducer';

// const makeStore = createStore(rootReducer);

const makeStore = () => {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  createStore(rootReducer, composeEnhancers);
};
export const wrapper = createWrapper(makeStore);
