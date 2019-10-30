import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import config from '../../../config';

import './CartPage.scss';

const CN = 'cart-page';

const CartPage = (props) => {
  const {
    className, changeQuantity, removeItemFromCart, userCart, showMessage
  } = props;
  const { cartTableHeadings } = config;
  const products = [
    {
      id: 10,
      title: 'beautiful swing coat',
      image: 'https://static.massimodutti.net/3/photos/2019/I/0/1/p/6406/512/800/6406512800_2_2_16.jpg?t=1571072186173&impolicy=massimodutti-itxmediumhigh&imwidth=900',
      color: 'blue',
      size: 12,
      price: 40,
      inventory: 10
    },
    {
      id: 12,
      title: 'nice swingy jacket',
      image: 'https://static.massimodutti.net/3/photos/2019/I/0/1/p/6747/710/808/6747710808_1_1_16.jpg?t=1571170096577&impolicy=massimodutti-itxmediumhigh&imwidth=600',
      color: 'green',
      size: 12,
      price: 60,
      inventory: 7
    }
  ];

  // these products are hard-coded here, as soon as wishlist is merged, products will come from the store. //

  const deliveryCost = 35;
  const voucher = 5;

  const isItemInCart = (item) => userCart.find((cartItem) => item.id === cartItem.id);

  const itemPrice = (id) => products.find((item) => item.id === id).price;
  const countTotal = userCart.reduce((acc, nextValue) => (acc + itemPrice(nextValue.id) * nextValue.quantity), 0);

  const renderProduct = (item) => (
    <CartItem
      key={item.title}
      item={item}
      changeQuantity={changeQuantity}
      userCart={userCart}
      removeItemFromCart={removeItemFromCart}
      showMessage={showMessage}
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
        {products.map((item) => isItemInCart(item) && renderProduct(item))}
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
            <p>{`$${countTotal + deliveryCost - voucher}`}</p>
          </div>
        </div>
      </div>
      <div className={`${CN} content container`}>
        <Link className={`${CN}__pseudo-button col-6 col-center`} to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  className: PropTypes.string,
  showMessage: PropTypes.func.isRequired
};

CartPage.defaultProps = {
  className: ''
};

export default CartPage;
