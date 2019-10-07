import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import ProductItem from './ProductItem';

class MostPopular extends Component {
  state = {
    products: [],
  }

  async downloadProducts() {
    const userApi = new HttpService();
    const response = await userApi.get('http://localhost:4000/most-popular');
    this.setState({ products: response.data });
  }

  componentDidMount() {
    this.downloadProducts();
  }

  render() {
    const { products } = this.state;
    const block = products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
    return (
      <div className="wrapper">
        <h1 className="title">Most Popular</h1>
        <div className="container">
          {block}
        </div>
      </div>
    );
  }
}

export default MostPopular;
