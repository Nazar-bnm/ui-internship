/* eslint-disable react/no-did-update-set-state */
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
      currentPage: 1
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  componentDidUpdate({ filterProps: prevFilterProps }) {
    const { filterProps } = this.props;

    const isChangedFilters = prevFilterProps.some(
      (prevFilterProp, index) => filterProps[index] !== prevFilterProp
    );

    isChangedFilters
      && this.setState({
        currentPage: 1
      });
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
    const { dropdownItemsNumberSelectedID } = this.state;

    selectedID !== dropdownItemsNumberSelectedID
      && this.setState({
        dropdownItemsNumberSelectedID: selectedID,
        currentPage: 1
      });
  };

  render() {
    const {
      dropdownSortingSelectedID,
      dropdownItemsNumberSelectedID,
      currentPage
    } = this.state;

    const { gender, length, chosenItemsOnPage } = this.props;
    const numberOfPages = Math.ceil(length / chosenItemsOnPage);
    const visibleNumbers = numberOfPages > 5 ? 5 : 3;

    return (
      <div className={`${CN}`}>
        <div className={`${CN}__filter-wrapper`}>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            setCurrentPage={this.setCurrentPage}
            visibleNumbers={visibleNumbers}
          />
          <ProductListNavigationContainer
            dropdownSortingSelectedID={dropdownSortingSelectedID}
            dropdownItemsNumberSelectedID={dropdownItemsNumberSelectedID}
            changeSortingSelectedID={this.changeSortingSelectedID}
            changeItemsNumberSelectedID={this.changeItemsNumberSelectedID}
          />
        </div>
        <div className={`${CN}__items-list-container`}>
          <ItemsListContainer gender={gender} currentPage={currentPage - 1} />
        </div>
        <div className={`${CN}__filter-wrapper`}>
          <Pagination
            currentPage={currentPage}
            numberOfPages={numberOfPages}
            setCurrentPage={this.setCurrentPage}
            visibleNumbers={visibleNumbers}
          />
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
