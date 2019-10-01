import React, { Component } from 'react';
import HttpService from '../../service/httpService';


class WhatIsNew extends Component {
  state = {
    items: [],
  }

  test = async () => {
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
      <div key={index}>
        <img style={{ display: 'block' }} src={el.photo}/>
        <span>{el.title}</span>
        <span>{el.collection}</span>
      </div>
    ));
    return (
      <div>
        {block}
      </div>
    );
  }
}

export default WhatIsNew;
