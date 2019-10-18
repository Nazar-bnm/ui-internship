import React, { Component } from 'react';
import propTypes from 'prop-types';

import HttpService from '../../service/HttpService/httpService';
import ProductItem from './ProductItem/ProductItem';
import Carousel from '../Carousel';

import './MostPopular.scss';

class MostPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const userApi = new HttpService();
    try {
      const response = await userApi.get(`${process.env.BASE_URL}/most-popular`);
      if (response && response.data) {
        this.setState({ products: response.data });
      }
    } catch (error) {
      throw (new Error());
    }
  }

  render() {
    const { products } = this.state;
    const prodList = products.map((product) => {
      const { addToWishlist, removeFromWishlist, wishlist } = this.props;
      return (
        <ProductItem
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
          removeFromWishlist={removeFromWishlist}
          wishlist={wishlist}
        />
      );
    });

    return prodList.length
      && (
        <Carousel items={products}>
          {prodList}
        </Carousel>
      );
  }
}

MostPopular.propTypes = {
  addToWishlist: propTypes.func.isRequired,
  removeFromWishlist: propTypes.func.isRequired,
  wishlist: propTypes.array.isRequired
};

export default MostPopular;
