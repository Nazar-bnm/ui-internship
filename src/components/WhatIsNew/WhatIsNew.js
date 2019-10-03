import React, { Component } from 'react';
import HttpService from '../../service/HttpService/httpService';
import ItemInfo from './ItemInfo/ItemInfo';
import './WhatIsNew.scss';

class WhatIsNew extends Component {
  state = {
    items: [],
  }

  async test() {
    const userAPI = new HttpService();
    const response = await userAPI.get('http://localhost:4000/what-is-new');
    this.setState({ items: response.data });
  }

  componentDidMount() {
    this.test();
  }

  render() {
    const { items } = this.state;
    const block = items.map((el, index) => (
      <ItemInfo key={index} el={el} />
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