import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import ProductDetailsPage from '../../components/ProductDetailsPage';

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
    this.returnBack = this.returnBack.bind(this);
  }

  returnBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { product } = this.state;
    const productName = product.name;
    const productId = product.id;

    return (
      <div>
        <div>{productName}</div>
        <div>{productId}</div>
        <Button
          customClass="go-back-btn"
          icon="arrow left"
          onClickFunction={this.returnBack}
        >
          Go Back
        </Button>
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
