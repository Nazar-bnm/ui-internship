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
  constructor(props) {
    super(props);

    this.state = {
      resetCheckboxes: false
    };
  }

  resetFilters = (resetFunc) => {
    // this.setState({ resetCheckboxes: true }, () => {
    //   const { resetCheckboxes: reseted } = this.state;
    //   console.log(reseted, 'resetCheckboxes');
    // });

    this.setState({resetCheckboxes: true});
    resetFunc();
  };

  componentWillUnmount() {
    const { resetState } = this.props;

    resetState && resetState()
  }

  render() {
    const { match: { params: { category } }, resetState } = this.props;
    const { resetCheckboxes } = this.state;
    // resetState();

    return (
      <div className={`content ${cx(CN)}`}>
        <div className={`${CN}__line`}>
          <div> Home</div>
          <div>&#10094; Return to previous page</div>
        </div>
        <div className={`${cx(CN)}__gridWrapper`}>
          <div className={`${CN}__filter`}>
            <Button onClickFunction={() => this.resetFilters(resetState)}>Reset Filters</Button>
            <Filter category={category} resetCheckboxes={resetCheckboxes} />
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
          </div>
          <div className={`${CN}__poster`}>
            <div className={`${CN}__heading`}>
              <Heading title={category} />
              <span className={`${CN}__heading-itemsLeft`}>557 items</span>
            </div>

            <CollectionPoster category={category} />
          </div>
          <div className={`${CN}__productList`}>
            <ProductList />
          </div>
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
