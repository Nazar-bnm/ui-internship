import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Dropdown';
import Button from '../../Button';
import { dropdownsForItemListPage } from '../../../constants';
import { CN } from '../ProductList';

const { itemsOnPage, sortBy } = dropdownsForItemListPage;

const ProductListNavigation = ({ changeItemsOnPageNum, changeSortingOrder, ascendingOrder, changeOrderType }) => {
  return (
    <div className={`${CN}__dropdowns-wrapper`}>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>sort by</span>
        <Dropdown
          options={sortBy}
          changeItemsOnPageNum={changeItemsOnPageNum}
          changeOrderType={changeOrderType}
        />
        <Button
          customClass={`${CN}__arrow-btn`}
          onClickFunction={changeSortingOrder}
          icon={ascendingOrder ? 'arrow down' : 'arrow up'}/>
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>items on page</span>
        <Dropdown
          options={itemsOnPage}
          changeItemsOnPageNum={changeItemsOnPageNum}
          changeOrderType={changeOrderType}
        />
      </div>
    </div>
  );
};

ProductListNavigation.propTypes = {
  changeItemsOnPageNum: PropTypes.func.isRequired,
  changeSortingOrder: PropTypes.func.isRequired,
  ascendingOrder: PropTypes.bool,
  changeOrderType: PropTypes.func.isRequired,
};

ProductListNavigation.defaultProps = {
  ascendingOrder: true,
};

export default ProductListNavigation;
