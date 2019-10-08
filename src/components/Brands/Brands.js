import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';

class BrandsAndShippingInfo extends Component {
  state = {
    items: [],
  }

  async downloadProducts() {
    const userAPI = new HttpService();
    const response = await userAPI.get('http://localhost:4000/brands');
    this.setState({ items: response.data });
  }

  componentDidMount() {
    this.downloadProducts();
  }

  render() {
    const { items } = this.state;
    const block = items.map((item) => (
      <li key={item.id}>
        <img src={item.photo} className="brandItem"></img>
      </li>
    ));
    return (
      <div className="content">
        <h3 className="title">Top Brands</h3>
        <div className="container">
          <ul className="brandsList">
            {block}
          </ul>
        </div>
      </div>
    );
  }
}

export default BrandsAndShippingInfo;
