import React, { Component } from 'react';
import cx from 'classnames';

import Filter from './Filters';
import ProductList from '../ProductList';
import Heading from '../Heading/Heading';

import './ProductListPage.scss';

export const CN = 'productListPage';

class ProductListPage extends Component {
  render() {
    const { match: { params: { category } } } = this.props;

    return (
      <div className={`content ${cx(CN)}`}>
        <div className={`${cx(CN)}__gridWrapper`}>
          <div className={`${CN}__filter`}>
            <Filter category={category} />
            {this.category}
          </div>
          <div className={`${CN}__poster`}>
            <Heading title={category} />
            <div className={`${CN}__poster-wrapper container`}>
              <img
                className={`${CN}__poster-img`}
                src={`src/assets/img/productListPage/${category}.jpg`}
                alt="women"
              />
            </div>
          </div>
          <div className={`${CN}__productList`}>
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
