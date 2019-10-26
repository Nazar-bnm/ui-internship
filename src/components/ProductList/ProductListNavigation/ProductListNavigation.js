import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../shared/Dropdown';
import Button from '../../shared/Button';
import { dropdownsForItemListPage } from '../../../constants';

export const CN = 'product-list';

const { itemsOnPage, sortBy } = dropdownsForItemListPage;

const ProductListNavigation = (props) => {
  const {
    changeItemsOnPageNum,
    changeSortingOrder,
    ascendingOrder,
    changeOrderType,
    changeDropdownSortingSelectedID,
    dropdownSortingSelectedID,
    changeDropdownItemsNumberSelectedID,
    dropdownItemsNumberSelectedID
  } = props;

  return (
    <div className={`${CN}__dropdowns-wrapper`}>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>sort by</span>
        <Dropdown
          changeItemsOnPageNum={changeItemsOnPageNum}
          changeOrderType={changeOrderType}
          options={sortBy}
          changeDropdownSortingSelectedID={changeDropdownSortingSelectedID}
          dropdownSortingSelectedID={dropdownSortingSelectedID}
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
          options={itemsOnPage}
          changeDropdownSortingSelectedID={changeDropdownItemsNumberSelectedID}
          dropdownSortingSelectedID={dropdownItemsNumberSelectedID}
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