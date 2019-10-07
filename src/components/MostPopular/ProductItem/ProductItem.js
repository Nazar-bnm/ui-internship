import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
  const addLabel = ({ label }) => {
    // if (label === 'new') {
    //   return (
    //     <div className="product__img-wrapper__flag">{label}</div>
    //   );
    // } else if (label === 'sale') {
    //   return (
    //     <div className="product__img-wrapper__flag red">{label}</div>
    //   );
    // }
    label === 'new' ? <div className="product__img-wrapper__flag">{label}</div> :
      label === 'sale' ? <div className="product__img-wrapper__flag red">{label}</div> :
        <div className="product__img-wrapper__flag transparent">{label}</div>;
  };

  const { image, label, title, price } = product;
  return (
    <div className="product col-4">
      <div className="product__img-wrapper">
        <div className="product__img-wrapper__flag">{label}</div>
        <img className="product__img-wrapper__img" src={image}/>
      </div>
      <div className="product__title-wrapper">
        <h1 className="product__title-wrapper__title">{title}</h1>
        <h2 className="product__title-wrapper__price">{price}</h2>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
