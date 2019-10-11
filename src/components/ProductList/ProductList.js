import React from 'react';
import ProductListNavigation from './ProductListNavigation/ProductListNavigation';
import { dropdownsForItemListPage } from '../../constants';
import './ProductList.scss';

export const CN = 'product-list';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { priceOrder, positionOrder, itemNameOrder, itemsOnPage } = dropdownsForItemListPage;
    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper-top`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}/>
        </div>
        <div className={`${CN}__list-items-container`}></div>
        <div className={`${CN}__filter-wrapper-top`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}/>
          <div className={`${CN}__page-switcher`}>1 2 3 4 5 ... 10</div>
        </div>
      </div>
    );
  }
};

export default ProductList;
