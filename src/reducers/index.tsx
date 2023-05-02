import { ProductsState } from './types';
import products from "./products";

const initialState: ProductsState = {
  numberOfProductsPerPage: 3,
  theNumberOfProductsButton: [2,3,4,5,6],
  products: products,
  compareProducts: [],
  activeProductID: 0,
  nonDisplayedProducts: [],
  displayedProducts: [],
  searchPhrase: '',
  meaningСheckbox: false,
}

const productsReducer = (state: ProductsState = initialState,  action: { type: string; payload: any }) => {
  switch (action.type) {

    case "SET_NUMBER_OF_PRODUCTS_PER_PAGE":
        return { 
          ...state, 
          numberOfProductsPerPage: action.payload,
        };

    case "ADD_COMPARE_PRODUCT":
        return { 
          ...state, 
          compareProducts: action.payload,
        };

    case "ADD_DISPLAYED_AND_NON_DISPLAYED_PRODUCTS":

        const compareProductIds = state.compareProducts.map((product) => product);
        const nonDisplayedProductsNew = state.products.filter((product) => !compareProductIds.includes(product.id));
        const displayedProductsNew = state.products.filter((product) => compareProductIds.includes(product.id));

        return { 
          ...state, 
          nonDisplayedProducts: nonDisplayedProductsNew,
          displayedProducts: displayedProductsNew
        };

    case "ADD_ACTIVE_PRODUCT_ID":
        return { 
          ...state, 
          activeProductID: action.payload,
        };

    case "ADD_FILTERD_PRODUCTS":
        return { 
          ...state, 
          searchPhrase: action.payload,
        };

    case "SWAP_OBJECTS": 

        const index1 = state.products.findIndex(obj => obj.id === state.activeProductID);
        const index2 = state.products.findIndex(obj => obj.id === action.payload);
  
        if (index1 === -1 || index2 === -1) {
          return state;
        }
  
        const productIndex1 = state.products[index1];
        const newState = [...state.products];
        newState[index1] = newState[index2];
        newState[index2] = productIndex1;
  
        return {
          ...state,
          products: newState,
          activeProductID: action.payload
        };
      
      case "SET_MEANING_CHECBOX":
        return { 
          ...state, 
          meaningСheckbox: action.payload,
        };

    default: return state
  }
}

export default productsReducer;
