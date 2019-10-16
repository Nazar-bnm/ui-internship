import React from 'react';
import PropTypes from 'prop-types';
import ItemInfo from '../../WhatIsNew/ItemInfo';
import HttpService from '../../../service/HttpService/httpService';
import './ItemsList.scss';

const CN = 'items-container';
const userAPI = new HttpService();

const getItems = ({ itemsOnPage, ascendingOrder, orderType, itemList, error }) => {
  if (error) return <div>{error.message}</div>;
  const itemsToRender = [...itemList];

  const sortByItemName = (prevEl, nextEl) => {
    const prevName = prevEl.title.toUpperCase();
    const nextName = nextEl.title.toUpperCase();

    if (ascendingOrder) {
      return (prevName < nextName) ? -1 : (prevName > nextName) ? 1 : 0;
    } else {
      return (prevName < nextName) ? (prevName > nextName) ? 1 : 0 : -1;
    }
  };

  switch (orderType) {
  case 'Price':
    itemsToRender.sort((prevEl, nextEl) => {
      return (ascendingOrder ? prevEl.price - nextEl.price : nextEl.price - prevEl.price);
    });
    break;
  case 'Name':
    itemsToRender.sort((prevEl, nextEl) => {
      return sortByItemName(prevEl, nextEl);
    });
    break;
  case 'Position':
    if (!ascendingOrder) {
      itemsToRender.reverse();
    }
    break;
  default:
    break;
  }

  return itemsToRender.slice(0, itemsOnPage).map((el) => {
    return (
      <ItemInfo key={el.title} item={el} />
    );
  });
};

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

  render() {
    return (
      <div className={CN}>{ getItems(this.props) }</div>
    );
  }
}

ItemsList.propTypes = {
  itemsOnPage: PropTypes.number,
  ascendingOrder: PropTypes.bool,
  onGetProductsSuccess: PropTypes.func,
  onGetProductsError: PropTypes.func,
};

ItemsList.defaultProps = {
  itemsOnPage: 6,
  ascendingOrder: true,
};

export default ItemsList;
