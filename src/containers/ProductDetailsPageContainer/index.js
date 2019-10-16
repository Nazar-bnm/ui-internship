import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductDetailsPage from '../../components/ProductDetailsPage';

class ProductDetailsPageContainer extends Component {
  constructor(props) {
    super(props);

    const { match: { params } } = this.props;

    this.state = {
      product: {
        name: params.name,
        id: params.id,
      },
    };
  }

  returnBack() {
    return this.props.history.goBack();
  }

  render() {
    const productName = this.state.product.name;
    const productId = this.state.product.id;

    return (
      <div>
        <div>{productName}</div>
        <div>{productId}</div>
        <button onClick={() => this.returnBack()}>Go Back</button>
        <ProductDetailsPage />
      </div>
    );
  }
}

ProductDetailsPageContainer.propTypes = {
  // Routing history for returning back
  history: PropTypes.object,
  // Route path info
  match: PropTypes.object,
  // receiwed odject name
  name: PropTypes.string,
  // receiwed odject id
  id: PropTypes.string,
};

export default ProductDetailsPageContainer;
