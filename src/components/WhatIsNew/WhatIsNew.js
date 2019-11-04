import React, { Component } from 'react';

import HttpService from '@/service/HttpService/httpService';
import ItemInfo from './ItemInfo';

import './WhatIsNew.scss';

class WhatIsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const userAPI = new HttpService();
    try {
      const response = await userAPI.get(`${process.env.BASE_URL}/what-is-new`);
      if (response && response.data) {
        this.setState({ items: response.data });
      }
    } catch (error) {
      throw (new Error());
    }
  }

  render() {
    const { items } = this.state;
    const block = items.map((item) => (
      <ItemInfo key={item.id} item={item} />
    ));

    return (
      <div className="content">
        <h3 className="title">whats new</h3>
        <div className="container">
          {block}
        </div>
      </div>
    );
  }
}

export default WhatIsNew;
