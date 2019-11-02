import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Filter from './Filters';
import ProductList from '^/ProductList';
import Heading from '^/Heading/Heading';
import Button from '~/Button';
import CollectionPoster from '^/CollectionPoster';

import './ProductListPage.scss';

export const CN = 'productListPage';

class ProductListPage extends Component {
  componentWillUnmount() {
    const { resetFilterState } = this.props;
    resetFilterState && resetFilterState();
  }

  render() {
    const { match: { params: { category } }, resetFilterState } = this.props;

    return (
      <div className={cx(CN, 'content')}>
        <div className={`${CN}__line`}>
          <div>Home</div>
          <div>&#10094; Return to previous page</div>
        </div>
        <div className={`${cx(CN)}__gridWrapper`}>
          <section className={`${CN}__filter`}>
            <Button onClick={resetFilterState}>Reset Filters</Button>
            <Filter category={category} />
            <div
              className={`${cx(CN)}__brandAdvert`}
              style={{
                backgroundImage: 'url(src/assets/img/productListPage/collection_photo.jpg)'
              }}
            >
              <div className={`${cx(CN)}__brandAdvert-info`}>
                <div className={`${cx(CN)}__brandAdvert-brandName`}>michael kors</div>
                <div className={`${cx(CN)}__brandAdvert-collection`}>autumn collection</div>
              </div>
            </div>
          </section>
          <section className={`${CN}__poster`}>
            <div className={`${CN}__heading`}>
              <Heading title={category} />
              <span className={`${CN}__heading-itemsLeft`}>557 items</span>
            </div>
            <CollectionPoster category={category} />
          </section>
          <section className={`${CN}__productList`}>
            <ProductList />
          </section>
        </div>
      </div>
    );
  }
}

ProductListPage.propTypes = {
  category: PropTypes.string
};

ProductListPage.defaultProps = {
  category: 'women'
};

export default ProductListPage;
