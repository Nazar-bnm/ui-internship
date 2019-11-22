import React from 'react';

import { Dropdown } from '@/shared';
import config from '../../../../../config';

export const CN = 'dropdowns';

const ContentOptions = ({ actions: { changeCurrency } }) => {
  const { options } = config;
  const { company, currency, language } = options;
  // The following function will be removed when the functionality for the three dropdowns
  // is be added (language versions, companies versions and currency change)
  const onDropdownChange = () => true;

  return (
    <div className={`${CN} container`}>
      <Dropdown menuOptions={company} placeholder={company[0].label} onDropdownChange={onDropdownChange} />
      <Dropdown
        menuOptions={currency}
        placeholder={currency[0].label}
        onDropdownChange={changeCurrency}
      />
      <Dropdown menuOptions={language} placeholder={language[0].label} onDropdownChange={onDropdownChange} />
    </div>
  );
};

export default ContentOptions;
