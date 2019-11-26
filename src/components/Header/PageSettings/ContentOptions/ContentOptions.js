import React from 'react';

import { Dropdown } from '@/shared';
import config from '../../../../../config';

export const CN = 'dropdowns';

const ContentOptions = ({ changeCurrency, currency: carrencyProp, currencyKey }) => {
  const { options } = config;
  const { company, currency, language } = options;
  // The following function will be removed when the functionality for the three dropdowns
  // is be added (language versions, companies versions and currency change)
  const onDropdownChange = () => true;
  console.log(changeCurrency, carrencyProp, currencyKey);

  return (
    <div className={`${CN} container`}>
      <Dropdown menuOptions={company} placeholder={company[0].label} onDropdownChange={onDropdownChange} />
      <Dropdown
        menuOptions={currency}
        placeholder={currency[0].label}
        onDropdownChange={(value) => changeCurrency(value)}
      />
      <Dropdown menuOptions={language} placeholder={language[0].label} onDropdownChange={onDropdownChange} />
    </div>
  );
};

export default ContentOptions;
