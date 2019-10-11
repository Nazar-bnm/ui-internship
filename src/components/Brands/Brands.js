import React, { Component } from 'react';
import cx from 'classnames';

import HttpService from '../../service/HttpService/httpService';

import './Brands.scss';

export const CN = 'brand';

class BrandsAndShippingInfo extends Component {
  state = {
    brandsList: [],
  };

  async downloadBrands() {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${process.env.BASE_URL}/brands`);
      if (response && response.data) {
        this.setState({ brandsList: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.downloadBrands();
  }

  renderBrands(brands) {
    return brands.map((brand) => (
      <li key={brand.id} className={`col-2 ${CN}__list-item`}>
        <img src={brand.photo} className={`${CN}__list-photo`}/>
      </li>
    ));
  }

  render() {
    const { brandsList } = this.state;

    return (
      <div className="content">
        <h3 className="title">Top Brands</h3>
        <div className={`container ${cx(CN)}`}>
          <ul className={`${CN}__list`}>
            {this.renderBrands(brandsList)}
          </ul>
        </div>
      </div>
    );
  }
}

export default BrandsAndShippingInfo;
