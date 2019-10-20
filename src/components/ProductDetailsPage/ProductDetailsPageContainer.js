import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import ProductDetailsPage from './ProductDetailsPage';

class ProductDetailsPageContainer extends Component {
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
    const productId = product.id;

    return (
      <div>
        <div>{productName}</div>
        <div>{productId}</div>
        {this.renderGoBackBtn()}
        <ProductDetailsPage />
      </div>
    );
  }
}

ProductDetailsPageContainer.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string
};

ProductDetailsPageContainer.defaultProps = {
  history: {},
  match: {},
  name: '',
  id: ''
};

export default ProductDetailsPageContainer;
