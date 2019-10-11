import React from 'react';
import ProductListNavigation from './ProductListNavigation/ProductListNavigation';
import ItemsList from './ItemsList';
import { dropdownsForItemListPage } from '../../constants';
import './ProductList.scss';

export const CN = 'product-list';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenItemsOnPage: 6,
      descendingPriceOrder: true,
    };
  }

  changeItemsOnPageNum = (chosenItemsOnPage) => {
    // eslint-disable-next-line no-invalid-this
    this.setState({
      chosenItemsOnPage,
    });
  }

  sortByPrice = (orderType) => {
    // eslint-disable-next-line no-invalid-this
    this.setState({
      descendingPriceOrder: !!orderType,
    });
  }

  render() {
    const { priceOrder, positionOrder, itemNameOrder, itemsOnPage } = dropdownsForItemListPage;
    const { chosenItemsOnPage, descendingPriceOrder } = this.state;

    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper-top`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortByPrice={this.sortByPrice}/>
        </div>
        <div className={`${CN}__list-items-container`}>
          <ItemsList itemsOnPage={chosenItemsOnPage} descendingPriceOrder={descendingPriceOrder}/>
        </div>
        <div className={`${CN}__filter-wrapper-top`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortByPrice={this.sortByPrice}/>
          <div className={`${CN}__page-switcher`}>1 2 3 4 5 ... 10</div>
        </div>
      </div>
    );
  }
};

export default ProductList;
