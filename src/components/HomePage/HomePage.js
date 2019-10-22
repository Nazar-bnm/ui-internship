import React, { Component } from 'react';

import ProductList from '../ProductList';

const category = 'products';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts(category);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    return <ProductList />;
  }
}

export default HomePage;
