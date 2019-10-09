import React, { Component } from 'react';
import cx from 'classnames';
import HttpService from '../../service/HttpService/httpService';

import './WishlistPage.scss';
import WishlistItem from './WishlistItem';

const CN = 'wishlist';

class WishlistPage extends Component {
  state = {
    items: [],
  }

  async getProducts() {
    const userAPI = new HttpService();
    const response = await userAPI.get('http://localhost:4000/wishlist');
    this.setState({ items: response.data });
    console.log(this.state.items);
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { items } = this.state;
    console.log(items);
    const itemsBlock = items.map((item) => {
      return <WishlistItem key={item.id} item={item} />;
    });

    return (
      <div>
        <div className={`${cx(CN)} content`}>
          <h1 className={`${CN}__title`}>Wishlist</h1>
        </div>
        <div className={`${cx(CN)} content`}>
          {itemsBlock}
        </div>
      </div>
    );
  };
}

export default WishlistPage;
