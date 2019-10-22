import React from 'react';

import ProductListNavigationContainer from './ProductListNavigation';
import ItemsListContainer from './ItemsList';

import './ProductList.scss';

export const CN = 'product-list';

const ProductList = () => (
  <div className={`${CN} content`}>
    <div className={`${CN}__filter-wrapper`}>
      <ProductListNavigationContainer />
    </div>
    <div className={`${CN}__items-list-container`}>
      <ItemsListContainer />
    </div>
    <div className={`${CN}__filter-wrapper`}>
      <ProductListNavigationContainer />
    </div>
  </div>
);

export default ProductList;
