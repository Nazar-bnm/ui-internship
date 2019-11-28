import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import Checkout from '../Checkout';
import YouWillAlsoLove from '../YouWillAlsoLove';
import config from '../../../config';

import './CartPage.scss';

const CN = 'cart-page';

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deliveryCost: 35,
      voucher: 5
    };

    this.isItemInCart = this.isItemInCart.bind(this);
    this.itemPrice = this.itemPrice.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderNoItemsInCart = this.renderNoItemsInCart.bind(this);
  }

  async componentDidMount() {
    this.getConvertedPrice();
  }

  componentDidUpdate(prevProps) {
    const { currencyKey } = this.props;
    if (currencyKey !== prevProps.currencyKey) {
      this.getConvertedPrice();
    }
  }

  getConvertedPrice(value) {
    const { currencyKey } = this.props;
    const currencyResult = (value * currencyKey).toFixed(0);
    return currencyResult;
  }

  isItemInCart(item) {
    const { userCart } = this.props;

    return userCart.find((cartItem) => item._id === cartItem.id);
  }

  itemPrice(id) {
    const { products } = this.props;

    return products.find((item) => item._id === id).price;
  }

  renderProduct(item) {
    const {
      changeQuantity,
      removeItemFromCart,
      userCart,
      currency,
      currencyKey,
      symbol
    } = this.props;

    return (
      <CartItem
        key={item.title}
        item={item}
        changeQuantity={changeQuantity}
        userCart={userCart}
        removeItemFromCart={removeItemFromCart}
        currency={currency}
        currencyKey={currencyKey}
        symbol={symbol}
      />
    );
  }

  renderTable() {
    const { cartTableHeadings } = config;
    const { products } = this.props;

    return (
      <table className={`${CN}__table content`}>
        <tbody>
          <tr className={`${CN}__heading`}>
            {cartTableHeadings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
          {products.filter((item) => this.isItemInCart(item)).map((item) => this.renderProduct(item))}
        </tbody>
      </table>
    );
  }

  renderNoItemsInCart() {
    return (
      <div className={`${CN}__empty-page`}>
        <h2 className={`${CN}__subtitle`}>No items in your cart!</h2>
        <img
          className={`${CN}__image col-6 col-center"`}
          alt="no cart items"
          src="src/assets/img/content/img-no-cartitems.png"
        />
      </div>
    );
  }

  render() {
    const { deliveryCost, voucher } = this.state;
    const { userCart, className, symbol } = this.props;
    const countTotal = userCart.reduce((acc, nextValue) => (acc + this.itemPrice(nextValue.id) * nextValue.chosenQuantity), 0);
    const totalItemPrice = this.getConvertedPrice(countTotal);
    const currencyVoucher = this.getConvertedPrice(voucher);
    const currencyDeliveryCost = this.getConvertedPrice(deliveryCost);
    const totalAmountToPay = +totalItemPrice + (currencyDeliveryCost - currencyVoucher);

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
        <YouWillAlsoLove />

        <div className={`${CN} content`}>
          <h1 className={`${CN}__title`}>Cart</h1>
        </div>
        <div className={`${CN} content`}>
          {userCart.length ? this.renderTable()
            : this.renderNoItemsInCart()}
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
              <p>
                <>{symbol}</>
                {`${totalItemPrice}`}
              </p>
              <p>
                <>{symbol}</>
                {`${currencyDeliveryCost}`}
              </p>
              <p>
                <>{symbol}</>
                {`${currencyVoucher}`}
              </p>
              <hr />
              <p>
                <>{symbol}</>
                {`${totalAmountToPay}`}
              </p>
            </div>
          </div>
        </div>
        <Checkout />
      </div>
    );
  }
}

CartPage.propTypes = {
  className: PropTypes.string,
  currencyKey: PropTypes.number.isRequired,
  symbol: PropTypes.any.isRequired
};

CartPage.defaultProps = {
  className: ''
};

export default CartPage;
