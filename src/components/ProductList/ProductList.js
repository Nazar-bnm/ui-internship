import React, { Component } from 'react';

import Slide from '../Carousel/Slide';
import Carousel from '../Carousel';
import products from '../Carousel/products.json';

export const CN = 'ProductList';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: [...products] };
  }

  render() {
    const { productList } = this.state;

    const listOfProducts = productList
    && productList.map(({ productName, category, images }) => (
      <Slide
        image={images[0].url[0]}
        name={productName}
        category={category}
        key={productName}
      />
    ));

    return (
      <div className={`${CN} content`}>
        <Carousel items={productList}>
          { listOfProducts }
        </Carousel>
      </div>
    );
  }
}

export default ProductList;
