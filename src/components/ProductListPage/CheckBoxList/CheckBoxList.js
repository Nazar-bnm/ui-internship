import React from 'react';

import CheckBox from './CheckBox';

const CheckBoxList = ({ itemsList, category, checkCheckbox }) => {
  const renderCheckboxes = itemsList.map(({ item }) => (
    <div key={item}>
      <CheckBox
        itemName={item}
        checkCheckbox={checkCheckbox}
        category={category}
      />
    </div>
  ));

  return (
    <div>
      {renderCheckboxes}
    </div>
  );
};

export default CheckBoxList;
