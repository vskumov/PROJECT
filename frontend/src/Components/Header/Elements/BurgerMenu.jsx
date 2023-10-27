import Menu from "./Menu";
import CatalogBtn from "./CatalogBtn";
import "./_burgerMenu.scss";
import { Link } from "react-router-dom";

const BurgerMenu = ({ isMenuOpen, onClose }) => {
  return (
    <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
      {isMenuOpen && (
        <div className="menu-content">
          <Menu onLinkClick={onClose} />
          <CatalogBtn onLinkClick={onClose} />
        </div>
      )}
      <span className="menu-close">
        <Link to="#" onClick={onClose}>
          <i className="las la-times"></i>
        </Link>
      </span>
    </div>
  );
};

export default BurgerMenu;
