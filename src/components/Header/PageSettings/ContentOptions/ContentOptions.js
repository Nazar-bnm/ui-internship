import React from 'react';

import config from '../../../../../config';
import Dropdown from '../../../shared/Dropdown';

export const CN = 'dropdowns';

const ContentOptions = () => {
  const { options } = config;
  const { company, currency, language } = options;

  return (
    <div className={`${CN} container`}>
      <Dropdown
        menuOptions={company}
        placeholder={company[0].label}
        onDropdownChange={() => {}}
      />
      <Dropdown
        menuOptions={currency}
        placeholder={currency[0].label}
        onDropdownChange={() => {}}
      />
      <Dropdown
        menuOptions={language}
        placeholder={language[0].label}
        onDropdownChange={() => {}}
      />
    </div>
  );
};

export default ContentOptions;
