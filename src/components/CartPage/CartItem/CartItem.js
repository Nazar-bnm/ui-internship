import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './CartItem.scss';

const CN = 'cart-item';

const CartItem = (props) => {
  const {
    item, changeQuantity, userCart, removeItemFromCart, className
  } = props;
  const {
    _id, title, images, price, quantity
  } = item;
  const userCartItem = userCart.find((cartItem) => cartItem.id === _id) || {};
  const { chosenQuantity, color, size } = userCartItem;

  console.log();
  console.log();
  console.log();

  const inc = 1;
  const dec = -1;

  let userCartNew = [...userCart];

  const changeAmount = (gap) => {
    userCart.map((product, index) => {
      if (product.id === _id) {
        userCartNew[index].chosenQuantity += gap;
      }
    });
    changeQuantity(userCartNew);
  };

  const onRemoveFromCart = () => {
    userCartNew = userCart.filter((product) => product.id !== _id);
    removeItemFromCart(userCartNew);
  };

  const handleQuantity = () => ((chosenQuantity === 1) ? onRemoveFromCart : () => changeAmount(dec));

  const renderProductDescription = () => (
    <div className={`${CN}__description`}>
      <img className="col-3" src={`${process.env.IMAGE_URL}/${images[0].claudinaryId}`} alt={title} />
      <div className={`${CN}__text col-8 col-right`}>
        <h4 className={`${CN}__title`}>{title}</h4>
        <h4>
          {`color : ${color}`}
        </h4>
        <h4>
          {`size: ${size}`}
        </h4>
        <Link to={`/product-details/${_id}`} target="_blank">
          <p className={`${CN}__edit`}>
          Edit item
          </p>
        </Link>
        <button
          className={`${CN}__button`}
          type="button"
          onClick={onRemoveFromCart}
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
        onClick={handleQuantity()}
      >
        <i className="small minus icon" />
      </button>
      <p className={`${CN}__quantity`}>{chosenQuantity}</p>
      <button
        className={`${CN}__button`}
        type="button"
        onClick={() => changeAmount(inc)}
        disabled={chosenQuantity === quantity}
      >
        <i className="small plus icon" />
      </button>
    </div>
  );

  return (
    <tr className={cx(CN, className)} key={title}>
      <td className={`${CN}__column`}>{renderProductDescription()}</td>
      <td className={`${CN}__column`}>{`$${price}`}</td>
      <td className={`${CN}__column`}>{renderCounter()}</td>
      <td className={`${CN}__column`}>{`$${price * chosenQuantity}`}</td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    images: PropTypes.array,
    price: PropTypes.number,
    inventory: PropTypes.number
  }).isRequired,
  className: PropTypes.string,
  changeQuantity: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  userCart: PropTypes.array
};

CartItem.defaultProps = {
  className: '',
  userCart: []
};

export default CartItem;
