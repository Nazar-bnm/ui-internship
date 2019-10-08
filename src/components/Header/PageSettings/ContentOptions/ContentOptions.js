import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../../Dropdown';
import { options } from '../../../../config/headerMockups';
export const CN = 'dropdowns';

const ContentOptions = (props) => {
  const { company, currency, language } = options;

  return (
    <div className={'container dropdowns'}>
      <Dropdown options={company} />
      <Dropdown options={currency} />
      <Dropdown options={language} />
    </div>
  );
};

ContentOptions.propTypes = {
  grid: PropTypes.string,
  className: PropTypes.string,
};

export default ContentOptions;
