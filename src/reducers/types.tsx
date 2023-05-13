export interface Product {
  id: number;
  title: string;
  image: string;
  specifications: Specification;
}

export interface Specification {
  manufacturer: string;
  yearOfRelease: string;
  screenDiagonal: string;
  countryOfOrigin: string;
  memoryCapacity: string;
  screenRefreshRate: string;
  nfc: string;
  esimSupport: string;
  supportWirelessCharging: string;
  cost: string;
}

export interface ProductsState {
  products: Product[];
  compareProducts: any[];
  activeProductID: number;
  nonDisplayedProducts: any[];
  displayedProducts: any[];
}

export interface TypeReducer {
  numberOfProductsPerPage: number;
  theNumberOfProductsButton: number[];
  searchPhrase: string;
  meaningСheckbox: boolean;
}