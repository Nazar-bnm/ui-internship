import React, { Component } from 'react';
import cx from 'classnames';

import HttpService from '../../service/HttpService/httpService';

import './Brands.scss';

export const CN = 'brand';

class BrandsAndShippingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandsList: []
    };
  }

  componentDidMount() {
    this.downloadBrands();
  }

  async downloadBrands() {
    const userAPI = new HttpService();

    try {
      const response = await userAPI.get(`${process.env.BASE_URL}/brands`);
      if (response && response.data) {
        this.setState({ brandsList: response.data });
      }
    } catch (error) {
      // console.error(error);
    }
  }

  renderBrands(brands) {
    return brands.map(({ id, photo }) => (
      <li key={id} className={`col-2 ${CN}__list-item`}>
        <img alt="brand logo" src={photo} className={`${CN}__list-photo`} />
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
