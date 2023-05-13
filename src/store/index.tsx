import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsReducer';
import filterProductsReducer from '../reducers/filterProductsReducer';

type RootState = {
  products: ReturnType<typeof productsReducer>
  filterProducts: ReturnType<typeof filterProductsReducer>
}

const rootReducer = combineReducers({
  products: productsReducer,
  filterProducts: filterProductsReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development'
});

export type {RootState};
export default store;