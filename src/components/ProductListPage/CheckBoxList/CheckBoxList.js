import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../shared/CheckBox';

const CheckBoxList = ({ itemsList, category, checkCheckbox }) => {
  const renderCheckboxes = itemsList.map(({ item }) => (
    <CheckBox
      key={item}
      itemName={item}
      checkCheckbox={checkCheckbox}
      category={category}
    />
  ));

  return (
    <ul className="checkBoxList">
      {renderCheckboxes}
    </ul>
  );
};

CheckBoxList.propTypes = {
  itemsList: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  checkCheckbox: PropTypes.func.isRequired
};

export default CheckBoxList;
