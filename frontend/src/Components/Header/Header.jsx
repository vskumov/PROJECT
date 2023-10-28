import { useState } from "react";
import CatalogBtn from "./Elements/CatalogBtn";
import Menu from "./Elements/Menu";
import Logo from "./Elements/Logo";
import CartIcon from "./Elements/CartIcon";
import BurgerMenu from "./Elements/BurgerMenu";
import BurgerIcon from "./Elements/BurgerIcon";

import "./_header.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleBurgerMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="container">
        <Logo />
        <CatalogBtn />
        <Menu />
        <CartIcon />
        <BurgerIcon onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen}/>
      </header>

      <BurgerMenu isMenuOpen={isMenuOpen} onClose={handleBurgerMenuClose} />
    </>
  );
};

export default Header;
