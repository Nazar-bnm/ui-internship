import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import { itemsList } from '../productItems';
import './ItemsList.scss';

const CN = 'items-container';

const getItems = ({ itemsOnPage, descendingPriceOrder }) => {
  const itemsToRender = itemsList.slice(0, itemsOnPage);
  itemsToRender.sort((prevEl, nextEl) => {
    console.log(descendingPriceOrder);
    return (descendingPriceOrder ? prevEl.price - nextEl.price : nextEl.price - prevEl.price);
  });

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
  descendingPriceOrder: PropTypes.bool,
};

ItemsList.defaultProps = {
  itemsOnPage: 6,
  descendingPriceOrder: true,
};

export default ItemsList;
