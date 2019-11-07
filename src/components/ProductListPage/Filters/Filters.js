import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../../config';
import CheckBoxList from '../CheckBoxList';
import Accordion from '../../Accordion';

import './Filters.scss';

const Filters = ({ category, filterProps, checkCheckbox }) => {
  const TABLET_BREAKPOINT = 800;
  const gender = config[category];
  const screenWidth = document.body.clientWidth;
  const listOfCategoriesNames = Object.keys(gender);

  const renderAccordion = (categoryName, index) => {
    // regarding the mockups, only the first elem (index===0) should be opened
    const open = index === 0 && screenWidth <= TABLET_BREAKPOINT;
    const isFiltersShown = open || screenWidth > TABLET_BREAKPOINT;

    return (
      <Accordion
        className="filter__box"
        key={categoryName}
        heightItem="auto"
        open={isFiltersShown}
      >
        <CheckBoxList
          filterProps={filterProps}
          title={categoryName}
          itemsList={gender[categoryName]}
          category={categoryName}
          checkCheckbox={checkCheckbox}
        />
      </Accordion>
    );
  };

  return (
    <div className="filter__list">
      {listOfCategoriesNames.map((categoryName, index) => renderAccordion(categoryName, index))}
    </div>
  );
};

Filters.propTypes = {
  category: PropTypes.string.isRequired,
  filterProps: PropTypes.object.isRequired,
  checkCheckbox: PropTypes.func.isRequired
};

export default Filters;
