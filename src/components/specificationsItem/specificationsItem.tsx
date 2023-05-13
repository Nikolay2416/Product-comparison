import { useSelector } from "react-redux";
import { RootState } from "../../store/index";

import "./specificationsItem.scss";

interface ManufacturerProps { 
  nameOfTheCharacteristic: string, 
  characteristic: any[] 
}

export const SpecificationTextItem = ({ nameOfTheCharacteristic, characteristic }: ManufacturerProps) => {

  const {numberOfProductsPerPage} = useSelector((state: RootState) => state.filterProducts);

  const renderedItems = characteristic
    .slice(0, numberOfProductsPerPage)
    .map((item, index) => (
      <div key={index} className="specifications_body_specification_p">
        <p>{item}</p>
      </div>
  ));

  return (
    <div className={
      numberOfProductsPerPage <= 3 
      ? "specifications_body_specification paddingRight80" 
      : "specifications_body_specification"
    }>
      <div className="specifications_body_specification_meaning">
        <p>{nameOfTheCharacteristic}</p>
      </div>
      {renderedItems}
    </div>
  );
}

export const SpecificationImgItem = ({ nameOfTheCharacteristic, characteristic }: ManufacturerProps) => {

  const {numberOfProductsPerPage} = useSelector((state: RootState) => state.filterProducts);

  const renderedItems = characteristic
    .slice(0, numberOfProductsPerPage)
    .map((item, index) => (
      <div key={index} className="specifications_body_specification_p">
        <div>
          <img src={item}/>
        </div>
      </div>
  ));

  return (
    <div className={
      numberOfProductsPerPage <= 3 
      ? "specifications_body_specification paddingRight80" 
      : "specifications_body_specification"
    }>
      <div className="specifications_body_specification_meaning">
        <p>{nameOfTheCharacteristic}</p>
      </div>
      {renderedItems}
    </div>
  );
}