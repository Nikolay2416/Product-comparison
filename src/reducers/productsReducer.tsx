import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from './types';
import products from "./products";

const initialState: ProductsState = {
  products: products,
  compareProducts: [],
  activeProductID: 0,
  nonDisplayedProducts: [],
  displayedProducts: [],
}

const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCompareProduct(state, action: PayloadAction<any>) {
      state.compareProducts = action.payload;
    },
    addDisplayedAndNonDisplayedProducts(state) {
      const compareProductIds = state.compareProducts.map((product) => product);
      const nonDisplayedProductsNew = state.products.filter((product) => !compareProductIds.includes(product.id));
      const displayedProductsNew = state.products.filter((product) => compareProductIds.includes(product.id));

      state.nonDisplayedProducts = nonDisplayedProductsNew;
      state.displayedProducts = displayedProductsNew;
    },
    addActiveProductID(state, action: PayloadAction<number>) {
      state.activeProductID = action.payload;
    },
    swapObjects(state, action: PayloadAction<number>) {
      const index1 = state.products.findIndex(obj => obj.id === state.activeProductID);
      const index2 = state.products.findIndex(obj => obj.id === action.payload);
  
      if (index1 === -1 || index2 === -1) {
        return;
      }
  
      const productIndex1 = state.products[index1];
      const newState = [...state.products];
      newState[index1] = newState[index2];
      newState[index2] = productIndex1;
  
      state.products = newState;
      state.activeProductID = action.payload;
    },
  }
});

const {actions, reducer} = productsReducer;

export const {
  addCompareProduct,
  addDisplayedAndNonDisplayedProducts,
  addActiveProductID,
  swapObjects,
} = actions;

export default reducer;

