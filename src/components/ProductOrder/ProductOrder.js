import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropdown from '../Dropdown';
import './ProductOrder.scss';
export const CN = 'product-order';

const ProductOrder = (props) => {
  const { itemName, description, price, sizes, colors, quantity } = props;
  return (
    <div className={cx(CN)}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <Dropdown options={sizes} />
      <Dropdown options={colors} />
      <Dropdown options={quantity} />
    </div>);
};

ProductOrder.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

ProductOrder.defaultProps = {
  itemName: 'PINK DRESS',
  description: 'The best pink dress on the market, new collection!',
  price: '199',
  sizes: [
    { value: 's', label: 's' },
    { value: 'm', label: 'm' },
    { value: 'l', label: 'l' },
    { value: 'xl', label: 'xl' },
  ],
  colors: [
    { value: 'white', label: 'white' },
    { value: 'pink', label: 'pink' },
    { value: 'black', label: 'black' },
  ],
  quantity: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
  ],
};

export default ProductOrder;
