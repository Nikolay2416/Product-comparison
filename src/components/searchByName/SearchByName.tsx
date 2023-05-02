import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { useState, useEffect } from "react";
import {addFilteredProducts} from "../../actions/index";

import "./searchByName.scss";

const SearchByName = () => {

  const { nonDisplayedProducts } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');

  useEffect(() => {
    dispatch(addFilteredProducts(value)); 
  }, [value]);

  return (
    <div>
      {nonDisplayedProducts.length > 3 ? 
          <div className="input">
            <input type="text"  placeholder="Поиск" onChange={(event) => setValue(event.target.value)}/>
          </div> 
          : null}
    </div>
  );
};

export default SearchByName;