import React from 'react';

import config from '../../../../config';
import CheckBoxListContainer from '../CheckBoxList/CheckBoxListContainer';

import './Filters.scss';

const Filters = ({ category }) => {
  const gender = config[category];
  const categoriesNamesList = Object.keys(gender);
  const categoriesToDisplay = categoriesNamesList.map((kategoryName) => (
    <div key={kategoryName} className="category">
      <div>{kategoryName}</div>
      <CheckBoxListContainer
        itemsList={gender[kategoryName]}
        category={kategoryName}
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
