import React from 'react';
const Modal = ({ imageUrl, closeModal }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  return (
    <div
      className="overlay"
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
    <button className="button" onClick={loadMore}>
      Load more
    </button>
  );
};
export default Modal;
