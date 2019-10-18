import React, { Component } from 'react';

import Filter from './Filters';

import './ProductListPage.scss';

class ProductListPage extends Component {
  getCategory() {
    // eslint-disable-next-line react/destructuring-assignment
    let category = this.props.match.url;

    if (category.charAt(0) === '/') {
      category = category.slice(1);

      return category;
    }
  }

  render() {
    return (
      <div className="content">
        <div className="container plp">
          <div className="plp__filter">
            <Filter category={this.getCategory()} />
            {this.category}
          </div>
          <div className="plp__list-wrapper">
            <h3 className="title plp__list-title">{this.getCategory()}</h3>
          here will be products
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
