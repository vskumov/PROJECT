import { useState } from "react";
import Menu from "./Elements/Menu";
import Logo from "./Elements/Logo";
import CartIcon from "./Elements/CartIcon";
import BurgerMenu from "./Elements/BurgerMenu";
import BurgerIcon from "./Elements/BurgerIcon";
import CatalogBtn from "./Elements/CatalogBtn";

import "./_header.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  let scrollPosition = 0;

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      scrollPosition = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }

    setMenuOpen((prevState) => !prevState);
  };

  const handleBurgerMenuClose = () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="container">
        <Logo />
        <CatalogBtn />
        <Menu />
        <CartIcon />
        <BurgerIcon onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      </header>

      <BurgerMenu isMenuOpen={isMenuOpen} onClose={handleBurgerMenuClose} />
    </>
  );
};

export default Header;
