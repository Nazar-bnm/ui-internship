import React, { Component } from 'react';
import cx from 'classnames';

import Filter from './Filters';

import './ProductListPage.scss';

export const CN = 'productListPage';

class ProductListPage extends Component {
  getCategory() {
    const { match } = this.props;
    let category = match.url;

    if (category.charAt(0) === '/') {
      category = category.slice(1);

      return category;
    }
  }

  render() {
    return (
      <div className={`content ${cx(CN)}`}>
        <div className={`container ${CN}__wrapper`}>
          <div className={`${CN}__filter`}>
            <Filter category={this.getCategory()} />
            {this.category}
          </div>
          <div className={`${CN}__list-wrapper`}>
            <h3 className={`title ${CN}__list-title`}>{this.getCategory()}</h3>
          here will be products
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
