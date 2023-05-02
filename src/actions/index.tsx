
export const setNumberOfProductsPerPage = (Button: number) => ({
  type: "SET_NUMBER_OF_PRODUCTS_PER_PAGE",
  payload: Button
}); 

export const addCompareProduct = (arr: number[]) => ({
  type: "ADD_COMPARE_PRODUCT",
  payload: arr
}); 

export const addActiveProductID = (id: number) => ({
  type: "ADD_ACTIVE_PRODUCT_ID",
  payload: id
}); 

export const addDisplayedAndNonDisplayedProducts = () => ({
  type: "ADD_DISPLAYED_AND_NON_DISPLAYED_PRODUCTS",
}); 

export const addFilteredProducts = (value: string) => ({
  type: "ADD_FILTERD_PRODUCTS",
  payload: value
}); 

export const swapObjects = (id: number) => ({
  type: "SWAP_OBJECTS",
  payload: id,
});

export const setMeaningСheckbox = (boolean: boolean) => ({
  type: "SET_MEANING_CHECBOX",
  payload: boolean,
});