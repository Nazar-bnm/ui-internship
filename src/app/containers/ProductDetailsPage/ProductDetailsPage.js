import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: this.props.name,
        id: this.props.id,
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
  history: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ProductDetailsPage;
