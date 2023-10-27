import Menu from "./Menu";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import CatalogBtn from "./CatalogBtn";

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
