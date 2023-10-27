import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
