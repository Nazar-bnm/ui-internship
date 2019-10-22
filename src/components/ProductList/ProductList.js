import React, { Component } from 'react';

import Slide from '../Carousel-vertical/Slide';
import Carousel from '../Carousel-vertical';
import products from '../Carousel-vertical/products.json';

export const CN = 'ProductList';

const sizeValues = {
  desktop: 6,
  tablet: 3,
  mobile: 3
};

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { productList: [...products] };
  }

  render() {
    console.log(this.state);
    const { productList } = this.state;

    const listOfProducts = productList
    && productList.map(({ productName, category, images }) => {
      const mainProductImage = images[0].url[0];

      return (
        <Slide
          key={productName}
          image={mainProductImage}
          name={productName}
          category={category}
        />
      );
    });

    return (
      <div className={`${CN} content`}>
        <Carousel items={productList} type="vertical" visibleNumOfSlides={sizeValues}>
          {listOfProducts}
        </Carousel>
      </div>
    );
  }
}

export default ProductList;
