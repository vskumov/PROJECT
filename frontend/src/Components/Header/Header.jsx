import { useState } from "react";
import Menu from "./Elements/Menu";
import Logo from "./Elements/Logo";
import CartIcon from "./Elements/CartIcon";
import BurgerMenu from "./Elements/BurgerMenu";
import BurgerIcon from "./Elements/BurgerIcon";
import CatalogBtn from "./Elements/CatalogBtn";

import "./_header.scss";
import { makeHandleBurgerMenuClose, makeHandleMenuToggle } from "../../utils/burgerMenuUtils";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = makeHandleMenuToggle(isMenuOpen, setMenuOpen);
  const handleBurgerMenuClose = makeHandleBurgerMenuClose(setMenuOpen);

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
