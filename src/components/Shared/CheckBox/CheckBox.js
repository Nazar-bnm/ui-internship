import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CheckBox.scss';

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleCheckboxChange = () => {
    const {
      category, itemName, checkCheckbox
    } = this.props;

    const { clicked } = this.state;

    this.setState({ clicked: !clicked }, () => {
      const { clicked: lastClicked } = this.state;
      checkCheckbox(category, itemName, lastClicked);
    });
  };

  render() {
    const { itemName } = this.props;

    return (
      <li className="checkbox__name">
        <input
          className="checkbox"
          type="checkbox"
          id={itemName}
          onChange={this.handleCheckboxChange}
        />
        <label htmlFor={itemName}>{itemName}</label>
      </li>
    );
  }
}

CheckBox.propTypes = {
  category: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  checkCheckbox: PropTypes.func.isRequired
};

export default CheckBox;
