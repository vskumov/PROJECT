import "./_successOrderModal.scss";

function SuccessOrderModal({ setModal }) {
  return (
    <div className="modal" onClick={setModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={setModal}>
          <i className="las la-times"></i>
        </span>
        <i className="las la-truck"></i>
        <p>Your order has been placed!</p>
      </div>
    </div>
  );
}

export default SuccessOrderModal;
