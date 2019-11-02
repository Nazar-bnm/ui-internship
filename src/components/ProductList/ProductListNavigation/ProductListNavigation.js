import React from 'react';
import PropTypes from 'prop-types';

import Button from '~/Button';
import Dropdown from '~/Dropdown';
import { dropdownsForItemListPage } from '@/constants';

export const CN = 'product-list';

const { itemsOnPage, sortBy } = dropdownsForItemListPage;

const ProductListNavigation = (props) => {
  const {
    changeItemsOnPageNum,
    changeOrderType,
    changeSortingOrder,
    ascendingOrder,
    dropdownItemsNumberSelectedID,
    dropdownSortingSelectedID,
    changeSortingSelectedID,
    changeItemsNumberSelectedID
  } = props;

  const handleChangeItemsOnPageNum = (selectedItem) => {
    changeItemsOnPageNum(selectedItem);
    changeItemsNumberSelectedID(selectedItem);
  };

  const handleChangeSortingOrder = (selectedItem) => {
    changeOrderType(selectedItem);
    changeSortingSelectedID(selectedItem);
  };

  return (
    <div className={`${CN}__dropdowns-wrapper`}>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>sort by</span>
        <Dropdown
          onDropdownChange={handleChangeSortingOrder}
          menuOptions={sortBy}
          dropdownSelectedID={dropdownSortingSelectedID}
          value={sortBy[0].value}
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
          onDropdownChange={handleChangeItemsOnPageNum}
          menuOptions={itemsOnPage}
          dropdownSelectedID={dropdownItemsNumberSelectedID}
          value={itemsOnPage[0].value}
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
