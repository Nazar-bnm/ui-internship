import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../Shared/CheckBox';

const CheckBoxList = (props) => {
  const {
    itemsList, category, checkCheckbox, resetCheckboxes, isReseted
  } = props;
  const renderCheckboxes = itemsList.map(({ item }) => (
    <CheckBox
      key={item}
      itemName={item}
      checkCheckbox={checkCheckbox}
      category={category}
      resetCheckboxes={resetCheckboxes}
      isReseted={isReseted}
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
