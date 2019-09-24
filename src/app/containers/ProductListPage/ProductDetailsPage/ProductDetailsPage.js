import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductDetailsPage extends Component {
  renderProductList(){
    this.products = [...this.props.products];
    return this.products.map(({ product, id }) => {
      return <li key={id}>{product}</li>
    });
  }
  
  render() {    
    console.log(this.props);
    const { products } = this.props;
    return products ? <ul>{this.renderProductList()}</ul> : null;
  }
}

export default ProductDetailsPage