import React, { Component } from 'react';

import Slide from '../Carousel/Slide';
import Carousel from '../Carousel';
import products from '../Carousel/products.json';

export const CN = 'ProductList';

const sizeValues = {
  desktop: 3,
  tablet: 2,
  mobile: 1
};

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { productList: [...products] };
  }

  render() {
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
      <div style={{ height: '500px' }} className={`${CN} content`}>
        <Carousel visibleNumOfSlides={sizeValues}>
          {listOfProducts}
        </Carousel>
      </div>
    );
  }
}
// =======
// import React from 'react';

// import ProductListNavigationContainer from './ProductListNavigation';
// import ItemsListContainer from './ItemsList';

// import './ProductList.scss';

// export const CN = 'product-list';

// const ProductList = () => (
//   <div className={`${CN} content`}>
//     <div className={`${CN}__filter-wrapper`}>
//       <ProductListNavigationContainer />
//     </div>
//     <div className={`${CN}__items-list-container`}>
//       <ItemsListContainer />
//     </div>
//     <div className={`${CN}__filter-wrapper`}>
//       <ProductListNavigationContainer />
//     </div>
//   </div>
// );
// >>>>>>> ce3aef5d34750bfaecf382ab0da1c42627a98a2b

export default ProductList;
