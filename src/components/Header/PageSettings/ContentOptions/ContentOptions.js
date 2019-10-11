import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../../Dropdown';
import config from '../../../../../config';
export const CN = 'dropdowns';

const ContentOptions = () => {
  const { options } = config;
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
