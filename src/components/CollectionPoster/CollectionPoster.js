import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import HttpService from '@/service/HttpService/httpService';

import './CollectionPoster.scss';

export const CN = 'poster';

class CollectionPoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posterInfo: {}
    };
  }

  componentDidMount() {
    this.getPosterInfo();
  }

  async getPosterInfo() {
    const posterInfo = new HttpService();
    const { category } = this.props;

    try {
      const response = await posterInfo.get(`${process.env.BASE_URL}/${category}`);
      if (response && response.data) {
        this.setState({ posterInfo: response.data });
      }
    } catch (error) {
      throw (new Error());
    }
  }

  render() {
    const { category } = this.props;
    const { posterInfo } = this.state;

    return (
      <div
        className={`${cx(CN)} container`}
        style={{
          backgroundImage: `url(src/assets/img/productListPage/${category}.jpg)`
        }}
      >
        <div className={`${CN}__info`}>
          <h1 className={`${CN}__info-title`}>{posterInfo.title}</h1>
          <p className={`${CN}__info-description`}>{posterInfo.description}</p>
        </div>
      </div>
    );
  }
}

export default CollectionPoster;

CollectionPoster.propTypes = {
  category: PropTypes.string.isRequired
};
