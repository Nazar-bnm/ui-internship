/* eslint-disable no-invalid-this */
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
      ascendingOrder: true,
      orderType: '',
    };
  }

  changeItemsOnPageNum = (chosenItemsOnPage) => {
    this.setState({
      chosenItemsOnPage,
    });
  }

  sortItems = (orderType) => {
    this.setState({
      orderType,
    });
  }

  changeSortingOrder = () => {
    this.state.ascendingOrder ? this.setState({ ascendingOrder: false }) : this.setState({ ascendingOrder: true });
  }

  render() {
    const { priceOrder, positionOrder, itemNameOrder, itemsOnPage, sortBy } = dropdownsForItemListPage;
    const { chosenItemsOnPage, ascendingOrder, orderType } = this.state;

    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortBy={sortBy}
            sortItems={this.sortItems}
            changeSortingOrder={this.changeSortingOrder}
            ascendingOrder={ascendingOrder}
          />
        </div>
        <div className={`${CN}__list-items-container`}>
          <ItemsList
            itemsOnPage={chosenItemsOnPage}
            ascendingOrder={ascendingOrder}
            orderType={orderType}
          />
        </div>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigation
            priceOrder={priceOrder}
            positionOrder={positionOrder}
            itemNameOrder={itemNameOrder}
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortBy={sortBy}
            sortItems={this.sortItems}
            changeSortingOrder={this.changeSortingOrder}
            ascendingOrder={ascendingOrder}
          />
          <div className={`${CN}__page-switcher`}>1 2 3 4 5 ... 10</div>
        </div>
      </div>
    );
  }
};

export default ProductList;
