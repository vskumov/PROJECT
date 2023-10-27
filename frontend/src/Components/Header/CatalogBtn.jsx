import { Link } from "react-router-dom";

import "./_catalogBtn.scss";

function CatalogBtn() {
  return (
    <Link to="/catalog" className="catalog-btn as-btn">
      Catalog
    </Link>
  );
}

export default CatalogBtn;
