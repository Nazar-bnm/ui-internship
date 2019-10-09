import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import cx from 'classnames';

import './Brands.scss';

export const CN = 'shippingInfo';

class BrandsAndShippingInfo extends Component {
  state = {
    brandsList: [],
  };

  async downloadProducts() {
    const userAPI = new HttpService();
    const response = await userAPI.get('http://localhost:4000/brands');
    this.setState({ brandsList: response.data });
  }

  componentDidMount() {
    this.downloadProducts();
  }

  render() {
    const shippingData = [
      { number: 1, title: 'free shipping', description: 'on all orders over 50$' },
      { number: 2, title: 'money back guarantee', description: 'on all orders' },
      { number: 3, title: 'worldwide delivery', description: 'to over 80 countries' },

    ];
    const { brandsList } = this.state;
    const brands = brandsList.map((brand) => (
      <li key={brand.id} className="col-2 brand__list-item">
        <img src={brand.photo} className="brand__list-photo"></img>
      </li>
    ));
    const shippingInfo = shippingData.map((elem) => (
      <li key={elem.number} className={`${CN}__list-item`}>
        <span className={`${CN}__item-number`}>0{elem.number}.</span>
        <div className={`${CN}__item-text__wrapper`}>
          <h5 className={`${CN}__item-text__title`}>{elem.title}</h5>
          <h6 className={`${CN}__item-text__description`}>{elem.description}</h6>
        </div>
      </li>
    ));

    return (
      <div className="content">
        <h3 className="title">Top Brands</h3>
        <div className="container brand">
          <ul className="brand__list">
            {brands}
          </ul>
          <hr className="line"/>
          <ul className={`${cx(CN)}__list`}>
            {shippingInfo}
          </ul>
        </div>
      </div>
    );
  }
}

export default BrandsAndShippingInfo;
