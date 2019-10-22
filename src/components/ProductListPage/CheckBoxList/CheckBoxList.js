import React from 'react';

import CheckBox from './CheckBox';

const CheckBoxList = ({ itemsList, category, checkCheckbox }) => {
  const renderCheckboxes = itemsList.map(({ item }) => (
    <li key={item}>
      <CheckBox
        itemName={item}
        checkCheckbox={checkCheckbox}
        category={category}
      />
    </li>
  ));

  return (
    <ul>
      {renderCheckboxes}
    </ul>
  );
};

export default CheckBoxList;
