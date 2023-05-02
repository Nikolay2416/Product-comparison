import { useDispatch, useSelector} from 'react-redux';
import { setNumberOfProductsPerPage} from '../../actions/index';
import { RootState } from '../../store/index';

import "./filterProducts.scss";

const FilterProducts = () => {

  const {numberOfProductsPerPage, theNumberOfProductsButton, products} = useSelector((state: RootState) => state.products);
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