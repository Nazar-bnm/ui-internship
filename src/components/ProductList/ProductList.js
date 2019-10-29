import React from 'react';

import ProductListNavigationContainer from './ProductListNavigation';
import ItemsListContainer from './ItemsList';

import './ProductList.scss';

export const CN = 'product-list';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownSortingSelectedID: '',
      dropdownItemsNumberSelectedID: ''
    };
  }

  changeSortingSelectedID = (selectedID) => {
    this.setState({
      dropdownSortingSelectedID: selectedID
    });
  };

  changeItemsNumberSelectedID = (selectedID) => {
    this.setState({
      dropdownItemsNumberSelectedID: selectedID
    });
  };

  render() {
    const {
      dropdownSortingSelectedID,
      dropdownItemsNumberSelectedID
    } = this.state;

    return (
      <div className={`${CN} content`}>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigationContainer
            dropdownSortingSelectedID={dropdownSortingSelectedID}
            dropdownItemsNumberSelectedID={dropdownItemsNumberSelectedID}
            changeSortingSelectedID={this.changeSortingSelectedID}
            changeItemsNumberSelectedID={this.changeItemsNumberSelectedID}
          />
        </div>
        <div className={`${CN}__items-list-container`}>
          <ItemsListContainer />
        </div>
        <div className={`${CN}__filter-wrapper`}>
          <ProductListNavigationContainer
            dropdownItemsNumberSelectedID={dropdownItemsNumberSelectedID}
            dropdownSortingSelectedID={dropdownSortingSelectedID}
            changeSortingSelectedID={this.changeSortingSelectedID}
            changeItemsNumberSelectedID={this.changeItemsNumberSelectedID}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
