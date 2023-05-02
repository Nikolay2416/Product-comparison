import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import {SpecificationTextItem, SpecificationImgItem} from "../specificationsItem/specificationsItem";

const Specifications = () => {
  const { displayedProducts, numberOfProductsPerPage, meaningСheckbox } = useSelector(
    (state: RootState) => state.products
  );

  const getSpecifications = (displayedProducts: any[], numberOfProducts: number, characteristicName: string) => {
    let displayedProductsCount = 0;
    let arr: any[] = [];
  
    displayedProducts.map(({specifications}) => {
      if (displayedProductsCount < numberOfProducts) {
        displayedProductsCount += 1;
        arr.push(specifications[characteristicName]);
      }
    })
  
    return arr;
  }

  const manufacturer = getSpecifications(displayedProducts, numberOfProductsPerPage, 'manufacturer');
  const yearOfRelease = getSpecifications(displayedProducts, numberOfProductsPerPage, 'yearOfRelease');
  const screenDiagonal = getSpecifications(displayedProducts, numberOfProductsPerPage, 'screenDiagonal');
  const countryOfOrigin = getSpecifications(displayedProducts, numberOfProductsPerPage, 'countryOfOrigin');
  const memoryCapacity = getSpecifications(displayedProducts, numberOfProductsPerPage, 'memoryCapacity');
  const screenRefreshRate = getSpecifications(displayedProducts, numberOfProductsPerPage, 'screenRefreshRate');
  const nfc = getSpecifications(displayedProducts, numberOfProductsPerPage, 'nfc');
  const esimSupport = getSpecifications(displayedProducts, numberOfProductsPerPage, 'esimSupport');
  const supportWirelessCharging = getSpecifications(displayedProducts, numberOfProductsPerPage, 'supportWirelessCharging');
  const cost = getSpecifications(displayedProducts, numberOfProductsPerPage, 'cost');


  const checkAllEqual = (arr: any[]): boolean => (arr.every((item) => item === arr[0]));

  const checkManufacturer =  checkAllEqual(manufacturer);
  const checkYearOfRelease =  checkAllEqual(yearOfRelease);
  const checkScreenDiagonal =  checkAllEqual(screenDiagonal);
  const checkCountryOfOrigin =  checkAllEqual(countryOfOrigin);
  const checkMemoryCapacity = checkAllEqual(memoryCapacity);
  const checkScreenRefreshRate = checkAllEqual(screenRefreshRate);
  const checkNfc = checkAllEqual(nfc);
  const checkEsimSupport = checkAllEqual(esimSupport);
  const checkSupportWirelessCharging = checkAllEqual(supportWirelessCharging);
  const checkCost = checkAllEqual(cost);
  
  return (
    <div className="specifications">
      <div className="specifications_body">
      {meaningСheckbox && checkManufacturer ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Производитель" characteristic={manufacturer} />
      }
      {meaningСheckbox && checkYearOfRelease ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="год релиза" characteristic={yearOfRelease} />
      }
      {meaningСheckbox && checkScreenDiagonal ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Диагональ экрана (дюйм)" characteristic={screenDiagonal} />
      }
      {meaningСheckbox && checkCountryOfOrigin ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Страна-производитель" characteristic={countryOfOrigin} />
      }
      {meaningСheckbox && checkMemoryCapacity ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Объем памяти" characteristic={memoryCapacity} />
      }
      {meaningСheckbox && checkScreenRefreshRate ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Частота обновления экрана" characteristic={screenRefreshRate} />
      }
      {meaningСheckbox && checkNfc ? null : 
        <SpecificationImgItem nameOfTheCharacteristic="NFC" characteristic={nfc} />
      }
      {meaningСheckbox && checkEsimSupport ? null : 
        <SpecificationImgItem nameOfTheCharacteristic="Поддержка eSIM" characteristic={esimSupport} />
      }
      {meaningСheckbox && checkSupportWirelessCharging ? null : 
        <SpecificationImgItem nameOfTheCharacteristic="Поддержка беспроводной зарядки" characteristic={supportWirelessCharging} />
      }
      {meaningСheckbox && checkCost ? null : 
        <SpecificationTextItem nameOfTheCharacteristic="Стоимость" characteristic={cost} />
      }
      </div>
    </div>
  );
};

export default Specifications;