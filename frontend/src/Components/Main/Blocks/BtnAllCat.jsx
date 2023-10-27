import { Link } from "react-router-dom";
import "./_btnAllCat.scss";

function BtnAllCat() {
  return (
    <Link to="/catalog" className="btn-categories">
      All Categories
    </Link>
  );
}

export default BtnAllCat;
