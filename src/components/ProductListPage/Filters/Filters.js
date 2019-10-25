import React from 'react';

import config from '../../../../config';
import CheckBoxListContainer from '../CheckBoxList/CheckBoxListContainer';
import Accordion from '../../Accordion';

import './Filters.scss';

const Filters = ({ category }) => {
  const gender = config[category];
  const tabletBreakpoint = 800;
  const screenWidth = document.body.clientWidth;

  const renderAccordion = (categoryName, index) => {
    // regarding the mockups, only the first elem (index===0) should be opened
    const open = index === 0 && screenWidth <= tabletBreakpoint;
    const isOpen = open || screenWidth > tabletBreakpoint;

    return (
      <Accordion
        className="filter__box"
        key={categoryName}
        heightItem="auto"
        open={isOpen}
        data={[{
          title: categoryName,
          id: categoryName,
          description: <CheckBoxListContainer
            itemsList={gender[categoryName]}
            category={categoryName}
          />
        }]}
      />
    );
  };

  return (
    <div>
      {Object.keys(gender).map((categoryName, index) => renderAccordion(categoryName, index))}
    </div>
  );
};

export default Filters;
