import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Dropdown';
import { CN } from '../ProductList';

const ProductListNavigation = ({ priceOrder, positionOrder, itemNameOrder, itemsOnPage }) => {
  return (
    <div>
      <div className={`${CN}__dropdowns-labels-wrapper`}>
        <span className={`${CN}__dropdowns-labels`}>price</span>
        <Dropdown options={priceOrder} />
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
        <Dropdown options={itemsOnPage} />
      </div>
    </div>
  );
};

ProductListNavigation.propTypes = {
  priceOrder: PropTypes.array,
  positionOrder: PropTypes.array,
  itemNameOrder: PropTypes.array,
  itemsOnPage: PropTypes.array,
};

ProductListNavigation.defaultProps = {
  priceOrder: [],
  positionOrder: [],
  itemNameOrder: [],
  itemsOnPage: [],
};

export default ProductListNavigation;
