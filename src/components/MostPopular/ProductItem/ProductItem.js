import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import cx from 'classnames';

const CN = 'product';
const ProductItem = ({ product }) => {
  const { image, label, title, price } = product;

  return (
    <div className={`${CN} col-4`}>
      <div className={`${CN}__img-wrapper`}>
        <div
          className={cx(`${CN}__img-wrapper__flag`, { red: (label === 'sale') },
            { black: (label === 'new' ) })}
        />
        <div className={`${CN}__img-wrapper__labels`}>{label}</div>
        <img className={`${CN}__img-wrapper__img`} src={image}/>
      </div>
      <div className={cx(`${CN}__title-wrapper`)}>
        <h2 className={`${CN}__title-wrapper__title`}>{title}</h2>
        <h3 className={`${CN}__title-wrapper__price`}>{price}</h3>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
