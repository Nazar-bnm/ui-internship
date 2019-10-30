import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import Carousel from '../Carousel';

import './MostPopular.scss';

const MostPopular = (props) => {
  const {
    products,
    showMessage
  } = props;

  const prodList = products.map((product) => (
    <ProductItem
      key={product.id}
      item={product}
      products={products}
      showMessage={showMessage}
    />
  ));

  return prodList.length
      && (
        <Carousel items={products}>
          {prodList}
        </Carousel>
      );
};

MostPopular.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  wishlist: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired
};

export default MostPopular;
