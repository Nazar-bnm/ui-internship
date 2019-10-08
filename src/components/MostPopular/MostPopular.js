import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import ProductItem from './ProductItem/ProductItem';
import './MostPopular.scss';

const urlBase = 'http://localhost:4000/most-popular';

class MostPopular extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.downloadProducts();
  }

  async downloadProducts() {
    const userApi = new HttpService();
    const response = await userApi.get(urlBase);
    this.setState({ products: response.data });
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
