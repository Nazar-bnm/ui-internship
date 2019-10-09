import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './ProductOrder.scss';
export const CN = 'product-order';

const handleClick = () => {
  console.log('enot!');
  return 1;
};

const ProductOrder = (props) => {
  const { itemName, description, price, sizes, colors, quantity } = props;
  return (
    <div className={cx(CN)}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <div className={`${CN}__dropdowns-wrapper`}>
        <Dropdown options={sizes} />
        <Dropdown options={colors} />
        <Dropdown options={quantity} />
      </div>
      <div className={`${CN}__buttons-wrapper`}>
        <Button customClass={`${CN}__cart-btn`} icon="" onClickFunction={handleClick}>add to cart</Button>
        <Button customClass={`${CN}__wishlist-btn`} icon=""onClickFunction={handleClick}>wishlist</Button>
      </div>
    </div>);
};

ProductOrder.propTypes = {
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.array.isRequired,
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
