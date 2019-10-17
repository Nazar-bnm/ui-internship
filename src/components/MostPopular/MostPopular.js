import React, { Component } from 'react';

import HttpService from '../../service/HttpService/httpService';
import ProductItem from './ProductItem/ProductItem';

import './MostPopular.scss';

const urlBase = 'http://localhost:4000/most-popular';

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
      const response = await userApi.get(urlBase);
      if (response && response.data) {
        this.setState({ products: response.data });
      }
    } catch (error) {
      throw (new Error());
    }
  }

  renderProducts() {
    const { products } = this.state;

    return products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="wrapper__title">Most Popular</h1>
        <div className="wrapper__container">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default MostPopular;
