import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import cx from 'classnames';


const ProductItem = ({ product }) => {
  const { image, label, title, price } = product;

  return (
    <div className="product col-3">
      <div className="product__img-wrapper">
        <div className={cx('product__img-wrapper__flag', { red: (label === 'sale') },
          { black: (label === 'new' ) })}></div>
        <div className='product__img-wrapper__labels'>{label}</div>
        <img className="product__img-wrapper__img" src={image}/>
      </div>
      <div className="product__title-wrapper">
        <h2 className="product__title-wrapper__title">{title}</h2>
        <h3 className="product__title-wrapper__price">{price}</h3>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
