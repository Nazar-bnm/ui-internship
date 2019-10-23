import React from 'react';

import config from '../../../../config';
import CheckBoxListContainer from '../CheckBoxList/CheckBoxListContainer';
import Accordeon from '../../Accordion';

import './Filters.scss';

const Filters = ({ category }) => {
  const gender = config[category];
  const categoriesNamesList = Object.keys(gender);
  const categoriesToDisplay = categoriesNamesList.map((categoryName) => (
    <Accordeon
      key={categoryName}
      heightItem="auto"
      open
      data={[{
        title: categoryName,
        id: categoryName,
        description: <CheckBoxListContainer
          itemsList={gender[categoryName]}
          category={categoryName}
        />
      }]}
    />
  ));

  return (
    <div>
      {categoriesToDisplay}
    </div>
  );
};

export default Filters;
