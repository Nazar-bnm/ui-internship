import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../shared/Dropdown';
import Button from '../../shared/Button';
import { dropdownsForItemListPage } from '../../../constants';

export const CN = 'product-list';

const { itemsOnPage, sortBy } = dropdownsForItemListPage;

const ProductListNavigation = (props) => {
  const {
    changeItemsOnPageNum, changeSortingOrder, ascendingOrder, changeOrderType
  } = props;

  return (
    <div className={`${CN}__dropdowns-wrapper`}>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>sort by</span>
        <Dropdown
          changeItemsOnPageNum={changeItemsOnPageNum}
          changeOrderType={changeOrderType}
          menuOptions={sortBy}
          onDropdownChange={() => {}}
        />
        <Button
          customClass={`${CN}__arrow-btn`}
          icon={ascendingOrder ? 'arrow down' : 'arrow up'}
          onClickFunction={changeSortingOrder}
        />
      </div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>items on page</span>
        <Dropdown
          changeItemsOnPageNum={changeItemsOnPageNum}
          changeOrderType={changeOrderType}
          menuOptions={itemsOnPage}
          onDropdownChange={() => {}}
        />
      </div>
    </div>
  );
};

ProductListNavigation.propTypes = {
  ascendingOrder: PropTypes.bool,
  changeItemsOnPageNum: PropTypes.func.isRequired,
  changeOrderType: PropTypes.func.isRequired,
  changeSortingOrder: PropTypes.func.isRequired
};

ProductListNavigation.defaultProps = {
  ascendingOrder: true
};

export default ProductListNavigation;
