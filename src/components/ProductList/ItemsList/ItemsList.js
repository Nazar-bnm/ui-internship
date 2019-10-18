import React from 'react';
import PropTypes from 'prop-types';
import ItemInfo from '../../WhatIsNew/ItemInfo';
import HttpService from '../../../service/HttpService/httpService';
import './ItemsList.scss';

const CN = 'items-container';
const userAPI = new HttpService();

class ItemsList extends React.Component {
  componentDidMount() {
    this.getListItems();
  }

  async getListItems() {
    const { onGetProductsSuccess, onGetProductsError } = this.props;

    try {
      const response = await userAPI.get(`${process.env.BASE_URL}/product-list`);
      if (response.status === 404) {
        throw Error(response.statusText);
      }
      onGetProductsSuccess(response.data);
    } catch (error) {
      onGetProductsError(error);
    }
  }

  getItems() {
    const {
      itemsOnPage, ascendingOrder, orderType, itemList, error
    } = this.props;

    if (error) {
      return (
        <div className={`${CN}__error-container`}>
          Please run npm run mock:api to start the server and reload the page, or check the URL of your request.
        </div>
      );
    }

    const itemsToRender = [...itemList];

    const sortByItemName = (prevEl, nextEl) => {
      const prevName = prevEl.title.toUpperCase();
      const nextName = nextEl.title.toUpperCase();
      const isPrevLetterBigger = (prevName > nextName) ? 1 : 0;

      if (ascendingOrder) {
        return (prevName < nextName) ? -1 : isPrevLetterBigger;
      }
      return (prevName < nextName) ? isPrevLetterBigger : -1;
    };

    switch (orderType) {
      case 'Price':
        itemsToRender.sort((prevEl, nextEl) => (ascendingOrder ? prevEl.price - nextEl.price : nextEl.price - prevEl.price));
        break;
      case 'Name':
        itemsToRender.sort((prevEl, nextEl) => sortByItemName(prevEl, nextEl));
        break;
      case 'Position':
        if (!ascendingOrder) {
          itemsToRender.reverse();
        }
        break;
      default:
        break;
    }

    return itemsToRender.slice(0, itemsOnPage).map((el) => (
      <ItemInfo item={el} key={el.title} />
    ));
  }

  render() {
    return (
      <div className={CN}>{ this.getItems() }</div>
    );
  }
}

ItemsList.propTypes = {
  ascendingOrder: PropTypes.bool,
  itemsOnPage: PropTypes.number,
  onGetProductsError: PropTypes.func,
  onGetProductsSuccess: PropTypes.func
};

ItemsList.defaultProps = {
  itemsOnPage: 6,
  ascendingOrder: true,
  onGetProductsError: null,
  onGetProductsSuccess: null
};

export default ItemsList;
