/* eslint-disable no-invalid-this */
import React from 'react';
import ProductListNavigation from './ProductListNavigation';
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
      orderType: 'Position',
    };
  }

  changeItemsOnPageNum = (chosenItemsOnPage) => {
    this.setState({
      chosenItemsOnPage,
    });
  }

  changeSortingOrder = () => {
    this.state.ascendingOrder ? this.setState({ ascendingOrder: false }) : this.setState({ ascendingOrder: true });
  }

  render() {
    const { itemsOnPage, sortBy } = dropdownsForItemListPage;
    const { chosenItemsOnPage, ascendingOrder, orderType } = this.state;

    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigation
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortBy={sortBy}
            changeSortingOrder={this.changeSortingOrder}
            ascendingOrder={ascendingOrder}
          />
        </div>
        <div className={`${CN}__list-items-container`}>
          <ItemsList
            itemsOnPage={Number(chosenItemsOnPage)}
            ascendingOrder={ascendingOrder}
            orderType={orderType}
          />
        </div>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigation
            itemsOnPage={itemsOnPage}
            changeItemsOnPageNum={this.changeItemsOnPageNum}
            sortBy={sortBy}
            changeSortingOrder={this.changeSortingOrder}
            ascendingOrder={ascendingOrder}
          />
        </div>
      </div>
    );
  }
};

export default ProductList;
