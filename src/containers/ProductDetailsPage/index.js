import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetailsPage extends Component {
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
    return (
      <div>
        <div>{this.state.product.name}</div>
        <div>{this.state.product.id}</div>
        <button onClick={() => this.returnBack()}>Go Back</button>
      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  // Routing history for returning back
  history: PropTypes.object,
  // Route path info
  match: PropTypes.object,
  // receiwed odject name
  name: PropTypes.string,
  // receiwed odject id
  id: PropTypes.string,
};

export default ProductDetailsPage;
 