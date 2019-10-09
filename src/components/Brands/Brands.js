import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import './Brands.scss';

class BrandsAndShippingInfo extends Component {
  state = {
    items: [],
  };

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
      <li key={item.id} className="brandItem">
        <img src={item.photo} className="brandItemPhoto"></img>
      </li>
    ));

    return (
      <div className="content">
        <h3 className="title">Top Brands</h3>
        <div className="container">
          <ul className="brandsList">
            {block}
          </ul>
          <hr className="line"/>
          <ul>
            <li>
              <span>01.</span>
              <div>
                <h5>free shipping</h5>
                <h6>on all orders over 50$</h6>
              </div>
            </li>
            <li>
              <span>02.</span>
              <div>
                <h5>money back guarantee</h5>
                <h6>on all orders</h6>
              </div>
            </li>
            <li>
              <span>03.</span>
              <div>
                <h5>worldwide delivery</h5>
                <h6>to over 80 countries</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BrandsAndShippingInfo;
