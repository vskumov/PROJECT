import "./_saleBanner.scss";
import grass from "../../../../img/grass.png";
import { Link } from "react-router-dom";

function SaleBanner() {
  return (
    <div className="full-width banner-sale">
      <div className="container sale">
        <div className="sale-offer">
          <span className="sale-offer-xxxl">Sale </span>
          <span className="sale-offer-xl">new season</span>
          <Link to="/sales" className="sale-offer-button as-btn">
            Sale
          </Link>
        </div>
      </div>
      <img src={grass} alt="grass" />
    </div>
  );
}

export default SaleBanner;
