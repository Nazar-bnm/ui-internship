import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import Button from '../Button';
import './ProductOrder.scss';
export const CN = 'product-order';

const ProductOrder = (props) => {
  const { itemName, description, price, sizes, colors, quantity } = props;
  return (
    <div className={CN}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <div className={`${CN}__dropdowns-wrapper`}>
        <Dropdown options={sizes} />
        <Dropdown options={colors} />
        <Dropdown options={quantity} />
      </div>
      <div className={`${CN}__buttons-wrapper`}>
        <Link to={'/404'}>
          <Button customClass={`${CN}__cart-btn`}>add to cart</Button>
        </Link>
        <Link to={'/404'}>
          <Button customClass={`${CN}__wishlist-btn`} icon="heart">wishlist</Button>
        </Link>
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
  itemName: 'Detailed swing dress',
  // eslint-disable-next-line max-len
  description: 'A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice.',
  price: '$1,999.00',
  sizes: [
    { value: 'size:', label: 'size:' },
    { value: 's', label: 's' },
    { value: 'm', label: 'm' },
    { value: 'l', label: 'l' },
    { value: 'xl', label: 'xl' },
  ],
  colors: [
    { value: 'color:', label: 'color:' },
    { value: 'white', label: 'white' },
    { value: 'pink', label: 'pink' },
    { value: 'black', label: 'black' },
  ],
  quantity: [
    { value: 'qty:', label: 'qty:' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },

  ],
};

export default ProductOrder;
