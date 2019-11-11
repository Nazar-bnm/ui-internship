import React from 'react';
import PropTypes from 'prop-types';

import './CheckBox.scss';

const CheckBox = (props) => {
  const {
    category, itemName, checkCheckbox, isChecked
  } = props;

  const handleCheckboxChange = () => {
    checkCheckbox(category, itemName);
  };

  return (
    <li className="checkbox__name">
      <input
        checked={isChecked}
        className="checkbox"
        type="checkbox"
        onChange={handleCheckboxChange}
        id="checkbox-elem"
      />
      <label htmlFor="checkbox-elem">{itemName}</label>
    </li>
  );
};

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  checkCheckbox: PropTypes.func.isRequired
};

export default CheckBox;
