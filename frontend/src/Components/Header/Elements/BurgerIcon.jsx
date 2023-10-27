import './_burgerIcon.scss';

const BurgerIcon = ({ onMenuToggle }) => {
  return (
    <div className="burger-icon" onClick={onMenuToggle}>
      <i className="las la-bars"></i>
    </div>
  );
};

export default BurgerIcon;