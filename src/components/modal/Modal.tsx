import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import SearchByName from "../searchByName/SearchByName";
import { swapObjects} from '../../actions/index';

import pictureReplacementOfTheProduct from "../../assets/picture-replacement-of-the-product.jpg";
import "./modal.scss";

interface ModalProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

const Modal = ({ active, setActive }: ModalProps) => {

  const { nonDisplayedProducts, activeProductID, searchPhrase } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setActive, active]);

  const setSwapObjects = (button: number) => {
    dispatch(swapObjects(button));
  };

  const renderProductList = (arr: any[]) => {

    return arr.map(({id, image, title}) => {

        return (
          <div className="modal_content_product"  key={id} >
            <button
              type="button"
              onClick={() => setSwapObjects(id)}  
            >
                <img src={pictureReplacementOfTheProduct} alt="pictureReplacementOfTheProduct" />
            </button>
            <div className="modal_content_product_img">
              <img src={image} alt={title} />
            </div>
            <p>{title}</p>
          </div>
        )
      
    })
  }

  const filteredProducts = nonDisplayedProducts.filter(item => item.title.toLowerCase().includes(searchPhrase.toLowerCase()));

  const elements = renderProductList(filteredProducts);

  return (
    <div className={active ? "modal active-modal" : "modal"} ref={modalRef}>
      <div className="modal_content">
        <SearchByName/>
        {elements}
      </div>
    </div>
  );
};

export default Modal;