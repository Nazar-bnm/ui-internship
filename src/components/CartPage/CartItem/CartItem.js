import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import './CartItem.scss';

const CN = 'cart-item';

const CartItem = (props) => {
  const notificationTypeEnum = {
    infoRemovedFromCartNotif: {
      title: 'info',
      message: 'The item is removed from the cart',
      type: 'info'
    },
    addedItemNotif: {
      title: 'success',
      message: 'Added one more item',
      type: 'success'
    },
    decreasedItemNotif: {
      title: 'success',
      message: 'The quantaty of items was decreased',
      type: 'success'
    },
    itWasLastItemNotif: {
      title: 'warning',
      message: 'It was last item in the store',
      type: 'warning'
    },
    thereIsNoItemsLeftNotif: {
      title: 'error',
      message: 'Sorry, the there is no such product items left',
      type: 'error'
    }
  };

  const {
    item, changeQuantity, userCart, removeItemFromCart, className, showMessage
  } = props;
  const {
    id, title, image, price, inventory
  } = item;
  const userCartItem = userCart.find((cartItem) => cartItem.id === id);
  const { quantity, color, size } = userCartItem;
  const inc = 1;
  const dec = -1;

  let userCartNew = [...userCart];

  const audio = new Audio('src/assets/sounds/notification-sound.mp3');

  const playAudio = () => {
    audio.play();
  };

  const changeAmount = (gap) => {
    userCart.map((product, index) => {
      if (product.id === id) {
        userCartNew[index].quantity += gap;
      }
    });
    changeQuantity(userCartNew);
    if (gap === 1) {
      showMessage(notificationTypeEnum.addedItemNotif);
      playAudio();
    }
  };

  const onRemoveFromCart = () => {
    userCartNew = userCart.filter((product) => product.id !== id);
    removeItemFromCart(userCartNew);
    showMessage(notificationTypeEnum.infoRemovedFromCartNotif);
    playAudio();
  };

  const handleQuantity = () => ((quantity === 1) ? onRemoveFromCart : () => changeAmount(dec));

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
      <p className={`${CN}__quantity`}>{quantity}</p>
      <button
        className={`${CN}__button`}
        type="button"
        onClick={() => changeAmount(inc)}
        disabled={quantity === inventory}
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
      <td className={`${CN}__column`}>{`$${price * quantity}`}</td>
    </tr>
  );
};


CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
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
