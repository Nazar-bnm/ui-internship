import React from 'react';

import ProductListNavigationContainer from './ProductListNavigation';
import ItemsListContainer from './ItemsList';
import Pagination from '../Pagination';

import './ProductList.scss';

export const CN = 'product-list';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownSortingSelectedID: '',
      dropdownItemsNumberSelectedID: '',
      currentPage: 0
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(currentPage) {
    this.setState({
      currentPage
    });
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
      dropdownItemsNumberSelectedID,
      currentPage
    } = this.state;
    const { gender } = this.props;

    return (
      <div className={`${CN}`}>
        <div className={`${CN}__filter-wrapper`}>
          <Pagination numberOfPages={5} setCurrentPage={this.setCurrentPage} visibleNumbers={3} />
          <ProductListNavigationContainer
            dropdownSortingSelectedID={dropdownSortingSelectedID}
            dropdownItemsNumberSelectedID={dropdownItemsNumberSelectedID}
            changeSortingSelectedID={this.changeSortingSelectedID}
            changeItemsNumberSelectedID={this.changeItemsNumberSelectedID}
          />
        </div>
        <div className={`${CN}__items-list-container`}>
          <ItemsListContainer gender={gender} currentPage={currentPage} />
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
