import React from 'react';
import PropTypes from 'prop-types';

import { CheckBox } from '@/shared';

import './CheckBoxList.scss';

const CheckBoxList = (props) => {
  const {
    itemsList, category, checkCheckbox, filterProps
  } = props;

  const renderCheckboxes = itemsList.map(({ item }) => (
    <CheckBox
      key={item}
      itemName={item}
      checkCheckbox={checkCheckbox}
      category={category}
      isChecked={filterProps[category].includes(item)}
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
  checkCheckbox: PropTypes.func.isRequired,
  filterProps: PropTypes.object.isRequired
};

export default CheckBoxList;
