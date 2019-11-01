import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../../shared/CheckBox';

import './CheckBoxList.scss';

const CheckBoxList = (props) => {
  const {
    itemsList, category
  } = props;
  const renderCheckboxes = itemsList.map(({ item }) => (
    <CheckBox
      key={item}
      itemName={item}
      category={category}
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
  category: PropTypes.string.isRequired
};

export default CheckBoxList;
