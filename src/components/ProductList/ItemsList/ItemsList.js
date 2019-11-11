/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ProductItem from '../../MostPopular/ProductItem';
import HttpService from '../../../service/HttpService/httpService';

import mockedData from '../../../mockedDataForTests';
import { brandIDEnum } from '../../../constants';

import './ItemsList.scss';

const CN = 'items-container';
const userAPI = new HttpService();
const { mockedProductList } = mockedData;

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };

    this.sortByItemName = this.sortByItemName.bind(this);
    this.getListItems = this.getListItems.bind(this);
  }

  componentDidMount() {
    this.getListItems();
  }

  componentDidUpdate(prevProps) {
    const { filters } = this.props;

    if (!_.isEqual(prevProps.filters, filters)) {
      this.getListItems();
    }

    if (prevProps.itemsOnPage !== this.props.itemsOnPage || prevProps.currentPage !== this.props.currentPage) {
      this.getListItems();
    }
  }

  async getListItems() {
    const {
      categoryName,
      onGetProductsSuccess,
      onGetProductsError,
      gender,
      itemsOnPage,
      currentPage
    } = this.props;

    const categories = this.getCategoriesURL();
    const productsURL = `${process.env.SERVER_URL}/${categoryName}?genders=${gender}${categories}&limit=${itemsOnPage}&page=${currentPage}`;
    this.setState({
      isLoading: true
    });
    try {
      const response = await userAPI.get(productsURL);

      if (response.status === 404) {
        throw Error(response.statusText);
      }

      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 500);
      
      onGetProductsSuccess(response.data);
    } catch (error) {
      onGetProductsError(error);
    }
  }

  getItemsToRender() {
    const {
      error,
      wishlist,
      addToWishList,
      removeFromWishList
    } = this.props;

    if (error) {
      return (
        <div className={`${CN}__error-container`}>
          Please run npm run mock:api to start the server and reload the page, or check the URL of your request.
        </div>
      );
    }

    const itemsToRender = this.sortItems();

    return itemsToRender.map((el) => (
      <ProductItem
        key={el._id}
        product={el}
        wishlist={wishlist}
        addToWishList={addToWishList}
        removeFromWishList={removeFromWishList}
      />
    ));
  }

  getCategoriesURL() {
    const { filters } = this.props;
    const {
      bottoms,
      tops,
      sizes,
      colors,
      brands
    } = filters;
    let categories = '';
    const regexWhiteSpace = / /g;
    const allFilters = bottoms.concat(tops, sizes, colors, brands);

    allFilters.forEach((item) => {
      if (bottoms.includes(item) || tops.includes(item)) {
        categories += `&category=${item}`;
      } else if (sizes.includes(item)) {
        categories += `&sizes=${item}`;
      } else if (colors.includes(item)) {
        categories += `&colors=${item}`;
      } else {
        item.replace(regexWhiteSpace, '');
        categories += `&brandId=${brandIDEnum[item]}`;
      }
    });

    return categories;
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

    return (ascendingOrder ? prevEl.price - nextEl.price : nextEl.price - prevEl.price);
  }

  sortItems() {
    const { ascendingOrder, orderType, itemList } = this.props;
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

    return itemsToRender;
  }

  render() {
    const { isLoading } = this.state;
    return (
      !isLoading ? <div className={CN}>{this.getItemsToRender()}</div> : 'hello'
    );
  }
}

ItemsList.propTypes = {
  currentPage: PropTypes.number,
  ascendingOrder: PropTypes.bool,
  categoryName: PropTypes.string,
  itemList: PropTypes.array,
  itemsOnPage: PropTypes.number,
  onGetProductsError: PropTypes.func,
  onGetProductsSuccess: PropTypes.func
};

ItemsList.defaultProps = {
  currentPage: 0,
  ascendingOrder: true,
  categoryName: 'products',
  itemList: mockedProductList,
  itemsOnPage: 6,
  onGetProductsError: null,
  onGetProductsSuccess: null
};

export default ItemsList;
