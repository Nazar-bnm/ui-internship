import React from 'react';

import Dropdown from '../../../shared/Dropdown';
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

export default ContentOptions;
