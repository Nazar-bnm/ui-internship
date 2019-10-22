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
    quantity
  } = props;

  return (
    <div className={`${CN} content`}>
      <h2 className={`${CN}__heading`}>{itemName}</h2>
      <p className={`${CN}__description`}>{description}</p>
      <span className={`${CN}__price`}>{price}</span>
      <div className={`${CN}__dropdowns-wrapper`}>
        <Dropdown options={sizes} />
        <Dropdown options={colors} />
        <Dropdown options={quantity} />
      </div>
      <div className={`${CN}__buttons-wrapper`}>
        <Link to="/not_found">
          <Button customClass={`${CN}__cart-btn`}>add to cart</Button>
        </Link>
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
