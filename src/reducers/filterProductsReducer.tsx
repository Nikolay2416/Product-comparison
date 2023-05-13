import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeReducer {
  numberOfProductsPerPage: number;
  theNumberOfProductsButton: number[];
  searchPhrase: string;
  meaningСheckbox: boolean;
}

const initialState: TypeReducer = {
  numberOfProductsPerPage: 3,
  theNumberOfProductsButton: [2,3,4,5,6],
  searchPhrase: '',
  meaningСheckbox: false,
}

const filterProductsReducer = createSlice({
  name: 'filterProductsReducer',
  initialState,
  reducers: {
    setNumberOfProductsPerPage(state, action: PayloadAction<number>) {
      state.numberOfProductsPerPage = action.payload;
    },
    addFilteredProducts(state, action: PayloadAction<string>) {
      state.searchPhrase = action.payload;
    },
    setMeaningСheckbox(state, action: PayloadAction<boolean>) {
      state.meaningСheckbox = action.payload;
    },
  }
});

const {actions, reducer} = filterProductsReducer;

export const {
  setNumberOfProductsPerPage,
  addFilteredProducts,
  setMeaningСheckbox
} = actions;

export default reducer;