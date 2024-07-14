import React from 'react';
import style from './Modal.module.css';
const Modal = ({ imageUrl, closeModal }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  return (
    <div
      className={style.Overlay}
      onClick={closeModal}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="modal">
        <img src={imageUrl} alt="modal" />
      </div>
    </div>
  );
};

const Button = ({ loadMore }) => {
  return (
    <button className={style.Overlay} onClick={loadMore}>
      Load more
    </button>
  );
};
export default Modal;
