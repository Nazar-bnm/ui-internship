import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.itemName = props.itemName;
    this.checkCheckbox = props.checkCheckbox;
    this.category = props.category;

    this.state = {
      clicked: false
    };
  }

  handleCheckboxChange = () => {
    const {
      category, itemName, checkCheckbox, state: { clicked }
    } = this;

    this.setState({ clicked: !clicked }, () => {
      const { clicked: lastClicked } = this.state;
      checkCheckbox(category, itemName, lastClicked);
    });
  }

  render() {
    const { itemName, handleCheckboxChange } = this;

    return (
      <div>
        <input
          type="checkbox"
          id={itemName}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={itemName}>{itemName}</label>
      </div>
    );
  }
}

export default CheckBox;
