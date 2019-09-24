import React, {Component} from 'react';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage'

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {product: 'dress', id: '1'},
        {product: 't-shirt', id: '2'},
        {product: 'pants', id: '3'},
        {product: 'jeans', id: '4'},
      ]
    };
  }

  render() {
    console.groupCollapsed('ProductListPage');
    console.log(this.props);
    console.groupEnd();
    
    return <ProductDetailsPage products={this.state.products} />
  }
}

export default ProductListPage