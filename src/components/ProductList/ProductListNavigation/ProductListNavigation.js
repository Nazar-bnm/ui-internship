import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Dropdown';
import Button from '../../Button';
import { CN } from '../ProductList';

const ProductListNavigation = ({
  itemsOnPage,
  changeItemsOnPageNum,
  sortBy,
  sortItems,
  changeSortingOrder,
  ascendingOrder }) => {
  return (
    <div className={`${CN}__dropdowns-wrapper`}>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>sort by</span>
        <Dropdown options={sortBy} sortItems={sortItems}/>
        <Button
          customClass={`${CN}__arrow-btn`}
          onClickFunction={changeSortingOrder}
          icon={ascendingOrder ? 'arrow down' : 'arrow up'}/>
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>items on page</span>
        <Dropdown options={itemsOnPage} changeItemsOnPageNum={changeItemsOnPageNum}/>
      </div>
    </div>
  );
};

ProductListNavigation.propTypes = {
  itemsOnPage: PropTypes.array,
  changeItemsOnPageNum: PropTypes.func,
  sortBy: PropTypes.array,
  sortItems: PropTypes.func,
  changeSortingOrder: PropTypes.func,
  ascendingOrder: PropTypes.bool,
};

ProductListNavigation.defaultProps = {
  itemsOnPage: [],
  changeItemsOnPageNum: null,
};

export default ProductListNavigation;
