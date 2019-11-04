import React from 'react';

import { Dropdown } from '@/shared';
import config from '@/../config';

export const CN = 'dropdowns';

const ContentOptions = () => {
  const { options } = config;
  const { company, currency, language } = options;

  return (
    <div className={`${CN} container`}>
      <Dropdown menuOptions={company} placeholder={company[0].label} />
      <Dropdown menuOptions={currency} placeholder={currency[0].label} />
      <Dropdown menuOptions={language} placeholder={language[0].label} />
    </div>
  );
};

export default ContentOptions;
