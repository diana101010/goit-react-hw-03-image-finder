import React from 'react';
import style from './Button.module.css';
const Button = ({ loadMore }) => {
  return (
    <button className={style.Button} onClick={loadMore}>
      Load more
    </button>
  );
};
export default Button;
