import { Link } from "react-router-dom";

import "./_catalogBtn.scss";

function CatalogBtn({ onLinkClick }) {
  return (
    <Link to="/catalog" className="catalog-btn as-btn" onClick={onLinkClick}>
      Catalog
    </Link>
  );
}

export default CatalogBtn;
