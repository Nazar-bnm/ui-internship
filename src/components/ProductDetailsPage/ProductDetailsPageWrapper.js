import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';
import ProductDetailsPage from './ProductDetailsPage';

class ProductDetailsPageWrapper extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;

    this.state = {
      product: {
        name: params.name,
        id: params.id
      }
    };
  }

  renderGoBackBtn = () => {
    const { history } = this.props;

    return (
      <Button
        customClass="go-back-btn"
        icon="arrow left"
        onClickFunction={history.goBack}
      >
      Go Back
      </Button>
    );
  }

  render() {
    const { product } = this.state;
    const productName = product.name;
    // const productId = product.id;
    const productId = product.id;
    console.log(this.props);

    return (
      <div>
        {productName}
        {productId}
        {this.renderGoBackBtn()}
        <ProductDetailsPage id={productId} />
      </div>
    );
  }
}

ProductDetailsPageWrapper.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string
};

ProductDetailsPageWrapper.defaultProps = {
  match: {},
  name: '',
  id: ''
};

export default ProductDetailsPageWrapper;
