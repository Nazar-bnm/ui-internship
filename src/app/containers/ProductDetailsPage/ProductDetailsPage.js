import React, {Component} from 'react';

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;


    this.state = {
      product: {
        name: params.name,
        id: params.id
      }
    }
  }

  returnBack = () => {
    this.props.history.goBack();
  }
  
  render() {
    console.log('params', this.props.match);
    return(
      <div>
        <div>{this.state.product.name}</div>
        <div>{this.state.product.id}</div>
        <button onClick={() => this.returnBack()}>Go Back</button>
      </div>
    );
  }
}

export default ProductDetailsPage