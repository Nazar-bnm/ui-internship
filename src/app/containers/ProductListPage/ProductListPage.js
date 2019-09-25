import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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

  renderProductList(){
    return this.state.products.map(({ product, id }) => {
      return (
        <div>
          <li key={id}>
            <Link to={`/products/${id}`}>{product}</Link>
          </li>
        </div>
      )
    });
  }

  render() {
    return <ul>{this.renderProductList()}</ul>;
  }
}

export default ProductListPage