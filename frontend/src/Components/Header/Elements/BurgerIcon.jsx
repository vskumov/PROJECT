import "./_burgerIcon.scss";

const BurgerIcon = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <div className="burger-icon" onClick={onMenuToggle}>
      {isMenuOpen ? (
        <i className="las la-times"></i>
      ) : (
        <i className="las la-bars"></i>
      )}
    </div>
  );
};

export default BurgerIcon;
