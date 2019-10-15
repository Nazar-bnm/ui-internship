/* eslint-disable no-invalid-this */
import React from 'react';
import ProductListNavigation from '../../containers/ProductListNavigation';
import ItemsList from '../../containers/ItemsList';

import './ProductList.scss';

export const CN = 'product-list';

const ProductList = () => (
  <div className={`${CN} content`}>
    <div className={`${CN}__filter-wrapper`}>
      <ProductListNavigation />
    </div>
    <div className={`${CN}__items-list-container`}>
      <ItemsList />
    </div>
    <div className={`${CN}__filter-wrapper`}>
      <ProductListNavigation />
    </div>
  </div>
);

export default ProductList;
