import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './ProductOrder.scss';
export const CN = 'product-order';

const ProductOrder = (itemInfo) => {
  const { itemName, description, price, sizes, colors } = itemInfo;
  return (
    <div className={cx(CN)}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <select></select>
      {sizes}
      {colors}
    </div>);
};

ProductOrder.propTypes = {
  itemInfo: PropTypes.arrayOf(PropTypes.shape({
    itemName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
  })).isRequired,
};

ProductOrder.defaultProps = {
  itemName: 'PINK DRESS',
  description: 'The best pink dress on the market, new collection!',
  price: '199',
  sizes: ['s', 'm', 'l', 'xl'],
  colors: ['white', 'pink', 'black'],
};

export default ProductOrder;
