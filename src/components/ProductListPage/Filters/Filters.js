import React from 'react';

import config from '../../../../config';
import CheckBox from '../CheckBox';

import './Filters.scss';

const Filters = ({ category }) => {
  const gender = config[category][0];
  const categories = Object.keys(gender);

  // const handleCheckBox = (e, field, value) => {
  //   if (e.target.checked) {
  //     redux.checkCheckbox(field, value);
  //   } else {
  //     redux.uncheckCheckbox(field, value);
  //   }
  // }

  const categoriesToDisplay = categories.map((key) => (
    <div key={key} className="category">
      <div>{key}</div>
      <CheckBox
        items={gender[key]}
      />
    </div>

  ));

  return (
    <div>
      {categoriesToDisplay}
    </div>
  );
};

export default Filters;
