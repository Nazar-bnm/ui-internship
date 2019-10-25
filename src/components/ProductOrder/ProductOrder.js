import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropdown from '../shared/Dropdown';
import Button from '../shared/Button';

import './ProductOrder.scss';

export const CN = 'product-order';

const ProductOrder = (props) => {
  const {
    itemName,
    description,
    price,
    sizes,
    colors,
    quantity,
    addToCart,
    id
  } = props;

  const params = {
    ID: id,
    quantity: 2,
    color: 'white',
    size: 'M'
  };

  return (
    <div className={`${CN}`}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <div className={`${CN}__dropdowns-wrapper`}>
        <Dropdown options={sizes} mainLabel="size:" />
        <Dropdown options={colors} mainLabel="color:" />
        <Dropdown options={quantity} mainLabel="qty:" />
      </div>
      <div className={`${CN}__buttons-wrapper`}>
        {/* <Link to="/not_found"> */}
        <button
          onClick={() => addToCart(params)}
          type="button"
          className={`${CN}__cart-btn`}
        >
add to cart

        </button>
        {/* </Link> */}
        <Link to="/not_found">
          <Button
            customClass={`${CN}__wishlist-btn`}
            icon="heart"
          >
          wishlist
          </Button>
        </Link>
      </div>
    </div>
  );
};

ProductOrder.propTypes = {
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.array,
  sizes: PropTypes.array,
  colors: PropTypes.array
};

ProductOrder.defaultProps = {
  itemName: '',
  description: '',
  price: '',
  quantity: [],
  sizes: [],
  colors: []
};

export default ProductOrder;
