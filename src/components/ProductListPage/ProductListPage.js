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
        <div className={`${CN}__line`}>
          <div> Home</div>
          <div>&#10094; Return to previous page</div>
        </div>
        <div className={`${cx(CN)}__gridWrapper`}>
          <div className={`${CN}__filter`}>
            <Filter category={category} />
            {this.category}
          </div>
          <div className={`${CN}__poster`}>
            <Heading className={`${CN}__title`} title={category} />
            <div
              className={`${CN}__poster-wrapper container`}
              style={{
                backgroundImage: `url(src/assets/img/productListPage/${category}.jpg)`
              }}
            />
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
