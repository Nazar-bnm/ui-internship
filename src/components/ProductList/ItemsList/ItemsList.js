import React from 'react';
import PropTypes from 'prop-types';

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

  async getListItems() {
    const { onGetProductsSuccess, onGetProductsError, categoryName } = this.props;

    try {
      const response = await userAPI.get(`${process.env.BASE_URL1}/${categoryName}`);
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

    return itemsToRender.slice(0, itemsOnPage).map((el) => (
      <ProductItem
        key={el.title}
        item={el}
        wishlist={wishlist}
        addToWishList={addToWishList}
        removeFromWishList={removeFromWishList}
      />
    ));
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

  render() {
    return (
      <div className={CN}>{this.getItems()}</div>
    );
  }
}

const FiltersShape = PropTypes.shape({
  bottoms: PropTypes.array,
  tops: PropTypes.array,
  sizes: PropTypes.array,
  price: PropTypes.array,
  colors: PropTypes.array,
  brands: PropTypes.array
});

ItemsList.propTypes = {
  ascendingOrder: PropTypes.bool,
  categoryName: PropTypes.string,
  itemList: PropTypes.array,
  itemsOnPage: PropTypes.number,
  onGetProductsError: PropTypes.func,
  onGetProductsSuccess: PropTypes.func,
  filters: FiltersShape
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
