import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Dropdown from '@/shared/Dropdown/index';
import Button from '@/shared/Button';
import DynamicInput from '@/shared/DynamicInput';
import HttpService from '../../service/HttpService/httpService';

import { ADDED_TO_CART_NOTIFICATION } from '../../constants/notificationData';

import './ProductOrder.scss';

export const CN = 'product-order';

export default class ProductOrder extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props;

    this.state = {
      id,
      data: {},
      sizes: [],
      quantity: 1,
      colors: [],
      description: '',
      title: '',
      price: null,
      chosenQuantity: null,
      dataLoaded: false
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const userAPI = new HttpService();
    const { id } = this.state;

    try {
      const response = await userAPI.get(`https://b1-project.herokuapp.com/products/${id}`);

      if (response && response.data) {
        this.setState({
          data: response.data,
          sizes: response.data.sizes,
          quantity: response.data.quantity,
          colors: response.data.colors,
          description: response.data.description,
          title: response.data.title,
          price: response.data.price,
          dataLoaded: true
        });
      }
    } catch (error) {
      throw (new Error());
    }
  }

  handleSizeChange(item) {
    this.setState({ size: item });
  }

  handleColorChange(item) {
    this.setState({ color: item });
  }

  handleQuantityChange(item) {
    this.setState({ chosenQuantity: item });
  }

  addToCartWithNotification() {
    const { addToCart } = this.props;
    const { showMessage } = this.props;
    addToCart(this.state);
    showMessage(ADDED_TO_CART_NOTIFICATION);
  }

  content() {
    const {
      className,
      onClickAddToWishlist
    } = this.props;

    const {
      colors, sizes, quantity, title, description, price
    } = this.state;

    const makeDataTemplated = (value) => ({ label: value, value });

    const newSizes = sizes.map(makeDataTemplated);
    const newColors = colors.map(makeDataTemplated);

    return (
      <div className={`${CN} ${className}`}>
        <h2 className={`${CN}__heading`}>{title}</h2>
        <p className={`${CN}__description`}>{description}</p>
        <span className={`${CN}__price`}>{price}</span>
        <div className={`${CN}__dropdowns-wrapper`}>
          <Dropdown
            key="1"
            menuOptions={newSizes}
            mainLabel="size:"
            placeholder="Size :"
            onDropdownChange={this.handleSizeChange}
          />
          <Dropdown
            key="2"
            menuOptions={newColors}
            mainLabel="color:"
            placeholder="Colors :"
            onDropdownChange={this.handleColorChange}
          />
          <DynamicInput
            quantity={quantity}
            onInputChange={this.handleQuantityChange}
          />
        </div>
        <div className={`${CN}__buttons-wrapper`}>
          <Button
            onClick={() => this.addToCartWithNotification()}
            className={`${CN}__cart-btn`}
          >
          add to cart
          </Button>
          <Link to="/wishlist">
            <Button
              className={`${CN}__wishlist-btn`}
              icon="heart"
              onClick={onClickAddToWishlist}

            >
          wishlist
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { dataLoaded } = this.state;

    return (
      <>
        {dataLoaded && this.content()}
      </>
    );
  }
}

ProductOrder.propTypes = {
  addToCart: PropTypes.func
};

ProductOrder.defaultProps = {
  addToCart: PropTypes.func
};
