import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} src={image.API_URL} />
      ))}
    </ul>
  );
};
export default ImageGallery;
