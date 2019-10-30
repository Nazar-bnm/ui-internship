import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import ProductItem from '../../MostPopular/ProductItem';
import HttpService from '../../../service/HttpService/httpService';
import mockedData from '../../../mockedDataForTests';

import './ItemsList.scss';

const CN = 'items-container';
const userAPI = new HttpService();
const { mockedProductList } = mockedData;

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.sortByItemName = this.sortByItemName.bind(this);
  }

  componentDidMount() {
    this.getListItems();
  }

  componentDidUpdate(prevProps) {
    const { filters } = this.props;

    if (!_.isEqual(prevProps.filters, filters)) {
      this.getListItems();
    }
  }

  // TODO find better way to get gender, pass to props e.g.
  getGenderFromLocation() {
    const path = window.location.pathname;
    switch (path) {
      case '/women':
        return 'woman';
      case '/men':
        return 'man';
      case '/kids':
        return 'kids';
      default:
        return '';
    }
  }

  async getListItems() {
    const gender = this.getGenderFromLocation();

    const {
      onGetProductsSuccess, onGetProductsError, categoryName, filters
    } = this.props;
    const { bottoms, tops } = filters;
    let categories = '';
    bottoms.forEach((item) => {
      categories += `&category=${item}`;
    });
    tops.forEach((item) => {
      categories += `&category=${item}`;
    });


    try {
      const response = await userAPI.get(`${process.env.BASE_URL1}/${categoryName}?genders=${gender}${categories}`);
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
      itemsOnPage, ascendingOrder, orderType, itemList, error, wishlist, addToWishList, removeFromWishList
    } = this.props;

    if (error) {
      return (
        <div className={`${CN}__error-container`}>
          Please run npm run mock:api to start the server and reload the page, or check the URL of your request.
        </div>
      );
    }

    const itemsToRender = [...itemList];

    switch (orderType) {
      case 'Price':
        itemsToRender.sort((prevEl, nextEl) => this.sortByPrice(prevEl, nextEl));
        break;
      case 'Name':
        itemsToRender.sort((prevEl, nextEl) => this.sortByItemName(prevEl, nextEl));
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
      const uniquekey = `${el.description} + ${el._id}`;

      return (
        <ProductItem
          key={uniquekey}
          item={el}
          wishlist={wishlist}
          addToWishList={addToWishList}
          removeFromWishList={removeFromWishList}
        />
      );
    });
  }

  sortByItemName = (prevEl, nextEl) => {
    const { ascendingOrder } = this.props;
    const prevName = prevEl.title.toUpperCase();
    const nextName = nextEl.title.toUpperCase();
    const isPrevLetterBigger = (prevName > nextName) ? 1 : 0;

    if (ascendingOrder) {
      return (prevName < nextName) ? -1 : isPrevLetterBigger;
    }
    return (prevName < nextName) ? isPrevLetterBigger : -1;
  }

  sortByPrice = (prevEl, nextEl) => {
    const { ascendingOrder } = this.props;
    const prevElPrice = Number(prevEl.price);
    const nextElPrice = Number(nextEl.price);

    return (ascendingOrder ? prevElPrice - nextElPrice : nextElPrice - prevElPrice);
  }


  render() {
    return (
      <div className={CN}>{this.getItems()}</div>
    );
  }
}

ItemsList.propTypes = {
  ascendingOrder: PropTypes.bool,
  categoryName: PropTypes.string,
  itemList: PropTypes.array,
  itemsOnPage: PropTypes.number,
  onGetProductsError: PropTypes.func,
  onGetProductsSuccess: PropTypes.func
};

ItemsList.defaultProps = {
  ascendingOrder: true,
  categoryName: 'products',
  itemList: mockedProductList,
  itemsOnPage: 6,
  onGetProductsError: null,
  onGetProductsSuccess: null
};

export default ItemsList;
