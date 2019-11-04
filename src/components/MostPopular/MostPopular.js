import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';
import Carousel from '../Carousel';

import './MostPopular.scss';

const MostPopular = (props) => {
  const {
    products
  } = props;

  const prodList = products.map((product) => (
    <ProductItem
      key={product._id}
      product={product}
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
  products: PropTypes.array.isRequired
};

export default MostPopular;
