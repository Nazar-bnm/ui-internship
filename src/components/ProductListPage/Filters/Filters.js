import React from 'react';

import config from '../../../../config';
import CheckBoxListContainer from '../CheckBoxList/CheckBoxListContainer';

import './Filters.scss';

const Filters = ({ category }) => {
  const gender = config[category];
  const categoriesNamesList = Object.keys(gender);
  const categoriesToDisplay = categoriesNamesList.map((categoryName) => (
    <div key={categoryName} className="category">
      <div>{categoryName}</div>
      <CheckBoxListContainer
        itemsList={gender[categoryName]}
        category={categoryName}
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
