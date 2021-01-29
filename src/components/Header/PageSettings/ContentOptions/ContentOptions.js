import React from 'react';

import ls from 'local-storage';
import { Dropdown } from '@/shared';
import config from '../../../../../config';

export const CN = 'dropdowns';

const ContentOptions = ({ changeCurrency }) => {
  const { options } = config;
  const { company, currency, language } = options;
  // The following function will be removed when the functionality for the three dropdowns
  // is be added (language versions, companies versions and currency change)
  const onDropdownChange = () => true;
  const getCurrencyKeys = (currValue) => {
    const targetCurrencyObject = (currency.find((el) => el.value === currValue));

    ls.set('currency', currValue);
    changeCurrency(targetCurrencyObject);
  };
  const currentCurrencyValue = ls.get('currency');

  if (currentCurrencyValue) {
    const targetObj = currency.find((el) => el.value === currentCurrencyValue);

    changeCurrency(targetObj);
  }

  return (
    <div className={`${CN} container`}>
      <Dropdown menuOptions={company} placeholder={company[0].label} onDropdownChange={onDropdownChange} />
      <Dropdown
        menuOptions={currency}
        placeholder={currentCurrencyValue || currency[0].label}
        onDropdownChange={(currValue) => getCurrencyKeys(currValue)}
      />
      <Dropdown menuOptions={language} placeholder={language[0].label} onDropdownChange={onDropdownChange} />
    </div>
  );
};

export default ContentOptions;
