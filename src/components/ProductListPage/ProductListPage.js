import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Filter from './Filters';
import ProductList from '../ProductList';
import Heading from '../Heading/Heading';
import Button from '../shared/Button';
import CollectionPoster from '../CollectionPoster';

import './ProductListPage.scss';

export const CN = 'productListPage';

class ProductListPage extends Component {
  componentWillUnmount() {
    const { resetFilterState } = this.props;
    resetFilterState && resetFilterState();
  }

  render() {
    const { match: { params: { category } }, resetFilterState, fetchedItemsNumber } = this.props;

    return (
      <div className={cx(CN, 'content')}>
        <div className={`${CN}__line`}>
          <div>Home</div>
          <div>&#10094; Return to previous page</div>
        </div>
        <div className={`${CN}__gridWrapper`}>
          <section className={`${CN}__filters`}>
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
          <section className={`${CN}__productList`}>
            <div className={`${CN}__poster`}>
              <div className={`${CN}__heading`}>
                <Heading title={category} />
                <span className={`${CN}__heading-itemsLeft`}>{`${fetchedItemsNumber} items`}</span>
              </div>
              <CollectionPoster category={category} />
            </div>
            <ProductList gender={category} />
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
  category: 'woman'
};

export default ProductListPage;
