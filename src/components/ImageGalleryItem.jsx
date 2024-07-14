import React from 'react';
import style from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ image }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem - image}
        src={image.webformatURL}
        alt={image.id}
      />
    </li>
  );
};
export default ImageGalleryItem;
