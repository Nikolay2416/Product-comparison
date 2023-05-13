import { useDispatch, useSelector} from 'react-redux';
import { setNumberOfProductsPerPage} from '../../reducers/filterProductsReducer';
import { RootState } from '../../store/index';

import "./filterProducts.scss";

const FilterProducts = () => {

  const {products} = useSelector((state: RootState) => state.products);
  const {numberOfProductsPerPage, theNumberOfProductsButton} = useSelector((state: RootState) => state.filterProducts);
  const dispatch = useDispatch();

  const setProductsCount = (button: number) => {
    dispatch(setNumberOfProductsPerPage(button));
  };

  const renderButtonList = (arr: any[]) => {
    return arr.map((button) => {

      if (products.length >= button) {
        return (
          <button 
            key={button} 
            type="button" 
            className={button === numberOfProductsPerPage ? ' active-button' : ''}
            onClick={() => setProductsCount(button)} 
          >
              {button}
          </button>
        )
      }
    })
  }

  const elements = renderButtonList(theNumberOfProductsButton);

  return (
    <div className="products_numberOfProducts_buttons">
      <p>Отобразить товары:</p>
      {elements}
    </div>
  );
};

export default FilterProducts;