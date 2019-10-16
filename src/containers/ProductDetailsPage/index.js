import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetailsPage extends Component {
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

  returnBack() {
    const { history } = this.props;
    return history.goBack();
  }

  render() {
    const { product } = this.state;
    const { id, name } = product;
    return (
      <div>
        <div>{name}</div>
        <div>{id}</div>
        <button
          type="button"
          onClick={() => this.returnBack()}
        >
          Go Back
        </button>
      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  // Routing history for returning back
  history: PropTypes.object.isRequired,
  // Route path info
  match: PropTypes.object.isRequired,
  // receiwed odject name
  name: PropTypes.string.isRequired,
  // receiwed odject id
  id: PropTypes.string.isRequired
};

export default ProductDetailsPage;
