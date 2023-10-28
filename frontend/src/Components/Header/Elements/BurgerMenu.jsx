import { useNoScroll } from "../../../utils/burgerMenuUtils";

import Menu from "./Menu";
import CatalogBtn from "./CatalogBtn";

import "./_burgerMenu.scss";

const BurgerMenu = ({ isMenuOpen, onClose }) => {
  useNoScroll(isMenuOpen);

  return (
    <div className={`burger-menu ${isMenuOpen ? "open" : ""}`}>
      {isMenuOpen && (
        <div className="menu-content">
          <Menu onLinkClick={onClose} />
          <CatalogBtn onLinkClick={onClose} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
