import React from 'react';
import PropTypes from 'prop-types';

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
    <ul>
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
