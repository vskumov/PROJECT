import "./_addMoreOrDelete.scss";

const AddMoreOrDelete = ({ onAdd, onSubtract, quantity, className }) => {
  return (
    <div className={`add-or-delete ${className}`}>
      <button onClick={onSubtract} className="minus">
        <i className="las la-minus"></i>
      </button>
      <span> {quantity} </span>
      <button onClick={onAdd} className="plus">
        <i className="las la-plus"></i>
      </button>
    </div>
  );
};

export default AddMoreOrDelete;
