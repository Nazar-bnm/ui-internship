import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Dropdown';
import { CN } from '../ProductList';

// REWRITE THIS TO LOOP!!!

const ProductListNavigation = ({ priceOrder, positionOrder, itemNameOrder, itemsOnPage, changeItemsOnPageNum, sortByPrice }) => {
  return (
    <div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>price</span>
        <Dropdown options={priceOrder} sortByPrice={sortByPrice}/>
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>position</span>
        <Dropdown options={positionOrder} />
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>name</span>
        <Dropdown options={itemNameOrder} />
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>items on page</span>
        <Dropdown options={itemsOnPage} changeItemsOnPageNum={changeItemsOnPageNum}/>
      </div>
    </div>
  );
};

ProductListNavigation.propTypes = {
  priceOrder: PropTypes.array,
  positionOrder: PropTypes.array,
  itemNameOrder: PropTypes.array,
  itemsOnPage: PropTypes.array,
  changeItemsOnPageNum: PropTypes.func,
  sortByPrice: PropTypes.func,
};

ProductListNavigation.defaultProps = {
  priceOrder: [],
  positionOrder: [],
  itemNameOrder: [],
  itemsOnPage: [],
  changeItemsOnPageNum: null,
};

export default ProductListNavigation;
