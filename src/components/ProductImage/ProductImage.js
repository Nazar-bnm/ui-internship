import React from 'react';
import './ProductImage.scss';

const ProductImage = (imagesArr) => {
  return (
    <div className="product-image-container">
      <figure className="big-image-container">
        <img src={imagesArr[0].src} className="product-image" />
        <div class="image-on-hover"></div>
      </figure>
      <div className="small-images-container">
        <figure className="small-image">
          <img src={imagesArr[1].src} className="product-image" />
          <div class="image-on-hover"></div>
        </figure>
        <figure className="small-image">
          <img src={imagesArr[2].src} className="product-image" />
          <div class="image-on-hover"></div>
        </figure>
        <figure className="small-image">
          <img src={imagesArr[3].src} className="product-image" />
          <div class="image-on-hover"></div>
        </figure>
        <figure className="small-image">
          <img src={imagesArr[3].src} className="product-image" />
          <div class="image-on-hover"></div>
        </figure>
      </div>
    </div>
  );
};

export default ProductImage;
