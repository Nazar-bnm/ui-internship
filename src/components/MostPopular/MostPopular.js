import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import ProductItem from './ProductItem/ProductItem';
import './MostPopular.scss';

class MostPopular extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.downloadProducts();
  }

  async downloadProducts() {
    const userApi = new HttpService();
    const response = await userApi.get('http://localhost:4000/most-popular');
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    const block = products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));

    return (
      <div className="wrapper">
        <h1 className="wrapper__title">Most Popular</h1>
        <div className="wrapper__container">
          {block}
        </div>
      </div>
    );
  }
}

export default MostPopular;
