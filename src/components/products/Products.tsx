import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { useState, useEffect, useMemo } from "react";
import {addCompareProduct, 
        addActiveProductID, 
        addDisplayedAndNonDisplayedProducts, 
        setMeaningСheckbox} from "../../actions/index";
import FilterProducts from "../filterProducts/FilterProducts";
import Modal from "../modal/Modal";
import { ChangeEvent } from 'react';

import "./products.scss";

const Products = () => {
  const { products, numberOfProductsPerPage, nonDisplayedProducts } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(
    Array(products.length).fill(false)
  );

  const [idOfTheProductsShown, setIdOfTheProductsShown] = useState<number[]>([]);
  let displayedProductsCount = 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMeaningСheckbox(e.target.checked));
  }

  const addIdOfTheProductsShown = useMemo(() => {

    let arr: number[] = [];

    products.map(({id}) => {
      if (displayedProductsCount < numberOfProductsPerPage) {
          displayedProductsCount += 1;
          arr.push(id);
      }
    })

    setIdOfTheProductsShown(arr)
  }, [products, displayedProductsCount, numberOfProductsPerPage, FilterProducts])

  useEffect(() => {
    dispatch(addCompareProduct(idOfTheProductsShown)); 
    dispatch(addDisplayedAndNonDisplayedProducts()); 
  }, [products, idOfTheProductsShown]);

  const renderProductList = (arr: any[]) => {
    
    return arr.map(({ id, image, title }, index) => {

      if (displayedProductsCount < numberOfProductsPerPage) {

        displayedProductsCount += 1;

        return (
          <div className="products_main_product" key={id}>
            <div className="products_main_product_img-but">
              <div className="products_main_product_img-but_img">
                <img src={image} alt={title} />
              </div>
              <div className="products_main_product_img-but_button">
                {nonDisplayedProducts.length > 0 ? <button
                  className="products_main_product_img-but_button_arrow"
                  onClick={() => {
                    const newModalActive = [...modalActive];
                    newModalActive[index] = true;
                    setModalActive(newModalActive);
                    dispatch(addActiveProductID(id)); 
                  }}
                ></button> : null}
                <Modal
                  active={modalActive[index]}
                  setActive={() => {
                    const newModalActive = [...modalActive];
                    newModalActive[index] = false;
                    setModalActive(newModalActive);
                  }}
                />
              </div>
            </div>
            <p className="products_main_product_title">{title}</p>
          </div>
        );
      }
    });
  };

  const elements = renderProductList(products);

  return (
    <div className="products">
      <div className="products_numberOfProducts">
        <h1>Смартфоны</h1>
        <FilterProducts/>
      </div>
      <div className={numberOfProductsPerPage <= 3 ? "products_main paddingRight60" : "products_main"}>
        <div className="products_main_checkbox">
          <label htmlFor="checkbox" >
            <input type="checkbox" name="checkbox" onChange={e => handleChange(e)}/>
            Показать различия
          </label>
        </div>
        {elements}
      </div>
    </div>
  );
};

export default Products;


