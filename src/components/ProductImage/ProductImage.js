import React from 'react';
import './ProductImage.scss';

const ProductImage = (imagesArr) => {
  return (
    <div className="product-image-container">
      <div className="big-image-container">
        <img src={imagesArr[0].src} className="product-image" />
      </div>
      <div className="small-images-container">
        <div className="small-image">
          <img src={imagesArr[1].src} className="product-image" />
        </div>
        <div className="small-image">
          <img src={imagesArr[2].src} className="product-image" />
        </div>
        <div className="small-image">
          <img src={imagesArr[3].src} className="product-image" />
        </div>
        <div className="small-image">
          <img src={imagesArr[3].src} className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
