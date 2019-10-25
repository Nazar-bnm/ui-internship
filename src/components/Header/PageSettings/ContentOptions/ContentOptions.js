import React from 'react';

import Dropdown from '../../../shared/Dropdown';
import config from '../../../../../config';
import Dropdowns from '../../../shared/Dropdowns';

export const CN = 'dropdowns';

const ContentOptions = () => {
  const { options } = config;
  const { company, currency, language } = options;

  return (
    <div className={`${CN} container`}>
      <Dropdown options={company} />
      <Dropdown options={currency} />
      <Dropdown options={language} />
      <Dropdowns menuOptions={language} placeholder={language[0].label} />
    </div>
  );
};

export default ContentOptions;
