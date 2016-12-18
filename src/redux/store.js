import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default function configureStore(history, initialState, ApiService) {
  let middlewares = [
    routerMiddleware(history),
    thunk.withExtraArgument(ApiService),
  ];

  let enhancer = composeWithDevTools(applyMiddleware(...middlewares));

  if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(...middlewares);
  }

  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer((require('./rootReducer').default));
    });
  }

  return store;
}
