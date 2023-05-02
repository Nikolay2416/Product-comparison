import { createStore, combineReducers, compose } from 'redux';
import productsReducer from '../reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type RootState = {
  products: ReturnType<typeof productsReducer>
}

const composeEnhancers = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(combineReducers({ products: productsReducer }), composeEnhancers());

export type {RootState};
export default store;