import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './CartItem.scss';

const CN = 'cart-item';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inc: 1,
      dec: -1,
      convertedPrice: 0
    };

    this.changeAmount = this.changeAmount.bind(this);
    this.onRemoveFromCart = this.onRemoveFromCart.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.renderProductDescription = this.renderProductDescription.bind(this);
    this.renderCounter = this.renderCounter.bind(this);
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

  onRemoveFromCart() {
    const { userCart, removeItemFromCart, item } = this.props;
    const { _id } = item;
    let userCartNew = [...userCart];

    userCartNew = userCart.filter((product) => product.id !== _id);
    removeItemFromCart(userCartNew);
  }

  getConvertedPrice() {
    const { item, currencyKey } = this.props;
    const { price } = item;
    const currencyPrice = (price * currencyKey).toFixed(0);
    this.setState({
      convertedPrice: currencyPrice
    });
  }

  changeAmount(gap) {
    const { changeQuantity, userCart, item } = this.props;
    const { _id } = item;
    const userCartNew = [...userCart];

    userCart.map((product, index) => {
      if (product.id === _id) {
        userCartNew[index].chosenQuantity += gap;
      }
    });
    changeQuantity(userCartNew);
  }

  handleQuantity() {
    const { item, userCart } = this.props;
    const { _id } = item;
    const userCartItem = userCart.find((cartItem) => cartItem.id === _id) || {};
    const { chosenQuantity } = userCartItem;
    const { dec } = this.state;

    return ((chosenQuantity === 1) ? this.onRemoveFromCart : () => this.changeAmount(dec));
  }

  renderProductDescription = () => {
    const { item, userCart } = this.props;
    const { _id, title, images } = item;
    const userCartItem = userCart.find((cartItem) => cartItem.id === _id) || {};
    const { color, size } = userCartItem;
    return (
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
            onClick={this.onRemoveFromCart}
          >
            <i className="icon close small" />
          </button>
        </div>
      </div>
    );
  };

  renderCounter = () => {
    const { item, userCart } = this.props;
    const { quantity, _id } = item;
    const userCartItem = userCart.find((cartItem) => cartItem.id === _id) || {};
    const { chosenQuantity } = userCartItem;
    const { inc } = this.state;

    return (
      <div className={`${CN}__counter`}>
        <button
          className={`${CN}__button`}
          type="button"
          onClick={this.handleQuantity()}
        >
          <i className="small minus icon" />
        </button>
        <p className={`${CN}__quantity`}>{chosenQuantity}</p>
        <button
          className={`${CN}__button`}
          type="button"
          onClick={() => this.changeAmount(inc)}
          disabled={chosenQuantity === quantity}
        >
          <i className="small plus icon" />
        </button>
      </div>
    );
  };

  render() {
    const { convertedPrice } = this.state;
    const {
      item,
      userCart,
      className,
      symbol
    } = this.props;
    const { _id, title } = item;
    const userCartItem = userCart.find((cartItem) => cartItem.id === _id) || {};
    const { chosenQuantity } = userCartItem;

    return (
      <tr className={cx(CN, className)} key={title}>
        <td className={`${CN}__column`}>{this.renderProductDescription()}</td>
        <td className={`${CN}__column`}>
          <>{symbol}</>
          {`${convertedPrice}`}
        </td>
        <td className={`${CN}__column`}>{this.renderCounter()}</td>
        <td className={`${CN}__column`}>
          <>{symbol}</>
          {`${convertedPrice * chosenQuantity}`}
        </td>
      </tr>
    );
  }
}

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
  userCart: PropTypes.array,
  currencyKey: PropTypes.number.isRequired,
  symbol: PropTypes.any.isRequired
};

CartItem.defaultProps = {
  className: '',
  userCart: []
};

export default CartItem;
