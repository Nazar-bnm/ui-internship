import React, { Component } from 'react';
import cx from 'classnames';

import Filter from './Filters';

import './ProductListPage.scss';

export const CN = 'productListPage';

class ProductListPage extends Component {
  render() {
    const { match: { params: { category } } } = this.props;

    return (
      <div className={`content ${cx(CN)}`}>
        <div className={`container ${CN}__wrapper`}>
          <div className={`${CN}__filter`}>
            <Filter category={category} />
            {this.category}
          </div>
          <div className={`${CN}__list-wrapper`}>
            <h3 className={`title ${CN}__list-title`}>{category}</h3>
          here will be products
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
