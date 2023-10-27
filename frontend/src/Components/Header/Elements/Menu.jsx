import { Link } from "react-router-dom";

const Menu = ({ onLinkClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={onLinkClick}>Main Page</Link>
        </li>
        <li>
          <Link to="/products" onClick={onLinkClick}>All Products</Link>
        </li>
        <li>
          <Link to="/sales" onClick={onLinkClick}>Sales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
