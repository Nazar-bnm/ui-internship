import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../../Dropdown';
import { options } from '../../../../config/headerMockups';
export const CN = 'dropdowns';

const ContentOptions = () => {
  const { company, currency, language } = options;

  return (
    <div className={`${CN} container`}>
      <Dropdown options={company} />
      <Dropdown options={currency} />
      <Dropdown options={language} />
    </div>
  );
};

ContentOptions.propTypes = {
  className: PropTypes.string,
};

export default ContentOptions;
