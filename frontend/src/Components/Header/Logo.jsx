import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="shop name" className="logo" />
    </Link>
  );
}

export default Logo;
