import React, { Component } from 'react';
import './DynamicInput.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenQuantity: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { quantity, onInputChange } = this.props;
    const { target } = event;
    // eslint-disable-next-line no-nested-ternary
    const value = target.value > quantity ? quantity : target.value < 1 ? 1 : target.value;

    this.setState({
      chosenQuantity: value
    }, () => {
      const { chosenQuantity } = this.state;
      onInputChange && onInputChange(+chosenQuantity);
    });
  }

  render() {
    const { quantity } = this.props;

    return (
      <label className="dynamic-input">
          Quantity :
        <input
          name="quantity"
          type="number"
          min={0}
          max={quantity}
          defaultValue={1}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
