import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../shared/CheckBox';

const CheckBoxList = (props) => {
  const {
    itemsList, category, checkCheckbox
  } = props;
  const renderCheckboxes = itemsList.map(({ item }) => (
    <CheckBox
      key={item}
      itemName={item}
      category={category}
      checkCheckbox={checkCheckbox}
      isChecked={props[category].includes(item)}
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
