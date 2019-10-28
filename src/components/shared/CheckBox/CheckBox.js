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

  // componentDidUpdate(nextProps) {
  //   const { resetCheckboxes } = this.props;
  //   // console.log(resetCheckboxes, '______resetCheckboxes');
  //   // console.log(nextProps.resetCheckboxes, 'nextProps______resetCheckboxes');
  //   if (nextProps.resetCheckboxes !== resetCheckboxes) {
  //     this.setState({
  //       clicked: resetCheckboxes
  //     });
  //   }
  // }


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

  static getDerivedStateFromProps(props) {
    return props.resetCheckboxes && {clicked: false} || null;
  }

  render() {
    const { itemName } = this.props;
    const { clicked } = this.state;

    console.log(this.props, 'dsadsadas')


    return (
      <li className="checkbox__name">
        <input
          checked={clicked}
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
