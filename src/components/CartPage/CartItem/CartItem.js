import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './CartItem.scss';

const CN = 'cart-item';

const CartItem = (props) => {
  const {
    item, increment, decrement, userCart, removeItemFromCart, className
  } = props;
  const {
    id, title, image, price, inventory
  } = item;
  const userCartNew = [...userCart];
  const userCartItem = userCart.find((cartItem) => cartItem.id === id);
  const { quantity, color, size } = userCartItem;

  const onIncrement = () => {
    userCart.map((product, index) => {
      if (product.id === id) {
        userCartNew[index].quantity += 1;
      }
    });
    increment(userCartNew);
  };

  const onDecrement = () => {
    userCart.map((product, index) => {
      if (product.id === id) {
        userCartNew[index].quantity -= 1;
      }
    });
    decrement(userCartNew);
  };

  const onRemoveFromCart = () => {
    userCart.map((product, index) => {
      if (product.id === id) {
        userCartNew.splice(index, 1);
      }
    });
    removeItemFromCart(userCartNew);
  };

  const renderProductDescription = () => (
    <div className={`${CN}__description`}>
      <img className="col-3" src={image} alt={title} />
      <div className={`${CN}__text col-8 col-right`}>
        <h4 className={`${CN}__title`}>{title}</h4>
        <h4>
          {`color : ${color}`}
        </h4>
        <h4>
          {`size: ${size}`}
        </h4>
        <Link to={`${id}`} target="_blank">
          <p className={`${CN}__edit`}>
          Edit item
          </p>
        </Link>
        <button
          className={`${CN}__button`}
          type="button"
          onClick={() => onRemoveFromCart()}
        >
          <i className="icon close small" />
        </button>
      </div>
    </div>
  );


  const renderCounter = () => (
    <div className={`${CN}__counter`}>
      <button
        className={`${CN}__button`}
        type="button"
        onClick={(quantity === 1) ? () => onRemoveFromCart() : () => onDecrement()}
      >
        <i className="small minus icon" />
      </button>
      <p className={`${CN}__quantity`}>{quantity}</p>
      <button
        className={`${CN}__button`}
        type="button"
        onClick={() => onIncrement()}
        disabled={quantity === inventory}
      >
        <i className="small plus icon" />
      </button>
    </div>
  );

  return (
    <tr className={`${cx(CN, className)}`} key={title}>
      <td className={`${CN}__column`}>{renderProductDescription()}</td>
      <td className={`${CN}__column`}>{`$${price}`}</td>
      <td className={`${CN}__column`}>{renderCounter()}</td>
      <td className={`${CN}__column`}>{`$${price * quantity}`}</td>
    </tr>
  );
};

CartItem.propTypes = {
  className: PropTypes.string,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  userCart: PropTypes.array
};

CartItem.defaultProps = {
  className: '',
  userCart: []
};

export default CartItem;
