import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
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
    this.downloadProducts();
  }

  async downloadProducts() {
    const userAPI = new HttpService();
    const response = await userAPI.get('http://localhost:4000/what-is-new');
    this.setState({ items: response.data });
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
