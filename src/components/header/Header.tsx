import personalAccountIcon from "../../assets/personalAccountIcon.svg";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_body">
        <div className="header_body_catalog">
          <a href="#">Каталог</a>
        </div>
        <div className="header_body_personalAccount">
          <p className="header_body_personalAccount_comparison">Сравнение</p>
          <a href="#">
            <div className="header_body_personalAccount_link">
              <p>Личный кабинет</p>
              <div className="header_body_personalAccount_link_img">
                <img src={personalAccountIcon} alt="" />
              </div>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;