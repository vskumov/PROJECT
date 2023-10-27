import Menu from "./Elements/Menu";
import Logo from "./Elements/Logo";
import CartIcon from "./Elements/CartIcon";
import CatalogBtn from "./Elements/CatalogBtn";

import "./_header.scss";

 //TODO Роза: сделать бургерное меню для мобильной версии

function Header() {
  return (
    <header className="container">
      <Logo />
      <CatalogBtn />
      <Menu />
      <CartIcon />
    </header>
  );
}

export default Header;
