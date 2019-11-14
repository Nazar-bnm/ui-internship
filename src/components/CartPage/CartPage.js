import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import Checkout from '../Checkout';
import config from '../../../config';

import './CartPage.scss';

const CN = 'cart-page';

const CartPage = (props) => {
  const {
    className, changeQuantity, removeItemFromCart, userCart, products
  } = props;
  console.log('props', props);

  const { cartTableHeadings } = config;
  const deliveryCost = 35;
  const voucher = 5;

  const isItemInCart = (item) => userCart.find((cartItem) => item._id === cartItem.id);
  const itemPrice = (id) => products.find((item) => item._id === id).price;

  const countTotal = userCart.reduce((acc, nextValue) => (acc + itemPrice(nextValue.id) * nextValue.chosenQuantity), 0);

  const renderProduct = (item) => (
    <CartItem
      key={item.title}
      item={item}
      changeQuantity={changeQuantity}
      userCart={userCart}
      removeItemFromCart={removeItemFromCart}
    />
  );

  const renderTable = () => (
    <table className={`${CN}__table content`}>
      <tbody>
        <tr className={`${CN}__heading`}>
          {cartTableHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
        {products.filter((item) => isItemInCart(item)).map((item) => renderProduct(item))}
      </tbody>
    </table>
  );

  const renderNoItemsInCart = () => (
    <div className={`${CN}__empty-page`}>
      <h2 className={`${CN}__subtitle`}>No items in your cart!</h2>
      <img
        className={`${CN}__image col-6 col-center"`}
        alt="no cart items"
        src="src/assets/img/content/img-no-cartitems.png"
      />
    </div>
  );

  const getPrice = (value) => {
    const { setTotalCount } = props;
    setTotalCount(value);
  };

  return (
    <div className={cx(CN, className)}>
      <Link className={`${CN}__link`} to="/products">
        <div className={`${CN}__offer`}>
          <h2>
          Scoring a good fashion deal is as exhilarating as winning the lottery! Try out your luck!
          </h2>
          <div
            className={`col-6 col-center ${CN}__pseudo-button`}
          >
            Continue shopping
          </div>
        </div>
      </Link>

      <div className={`${CN} content`}>
        <h1 className={`${CN}__title`}>Cart</h1>
      </div>
      <div className={`${CN} content`}>
        {userCart.length ? renderTable()
          : renderNoItemsInCart()}
      </div>
      <div className={`${CN}__checkout content`}>
        <div className={`${CN}__receipt col-6 col-center`}>
          <div className="col-10">
            <p>Subtotal</p>
            <p>Delivery costs</p>
            <p>Gift voucher</p>
            <hr />
            <p>total price</p>
          </div>
          <div className="col-2">
            <p>{`$${countTotal}`}</p>
            <p>{`$${deliveryCost}`}</p>
            <p>{`$${voucher}`}</p>
            <hr />
            <p onChange={getPrice(`$${countTotal + deliveryCost - voucher}`)}>{`$${countTotal + deliveryCost - voucher}`}</p>
          </div>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

CartPage.propTypes = {
  className: PropTypes.string
};

CartPage.defaultProps = {
  className: ''
};

export default CartPage;
