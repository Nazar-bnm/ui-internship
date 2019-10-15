import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import { itemsArray } from '../productItems';
import './ItemsList.scss';

const CN = 'items-container';

const getItems = ({ itemsOnPage, ascendingOrder, orderType }) => {
  const itemsToRender = itemsArray.slice(0, itemsOnPage);

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
    itemsToRender.reverse();
    break;
  default:
    break;
  }

  return itemsToRender.map((el) => {
    return (
      <ProductItem key={el.title} item={el} />
    );
  });
};

const ItemsList = (props) => (
  <div className={CN}>
    { getItems(props) }
  </div>
);

ItemsList.propTypes = {
  itemsOnPage: PropTypes.number,
  ascendingOrder: PropTypes.bool,
};

ItemsList.defaultProps = {
  itemsOnPage: 6,
  ascendingOrder: true,
};

export default ItemsList;
