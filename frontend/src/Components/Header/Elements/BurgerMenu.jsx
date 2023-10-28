import Menu from "./Menu";
import CatalogBtn from "./CatalogBtn";
import { useEffect } from "react";

import "./_burgerMenu.scss";

const BurgerMenu = ({ isMenuOpen, onClose }) => {
  
    console.log(isMenuOpen);
  
    useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

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
