import React from 'react';
import cx from 'classnames';

import { Dropdown } from '@/shared';
import dropdownOptions from '../../../../config';

import './Payment.scss';

const CN = 'payment';

const Payment = () => {
// This function should be replaced when the proper functionality for dropdowns is added.
  const onDropdownChange = () => true;
  // console.log(dropdownOptions)

  return (
    <div className={cx(CN)}>
      <div className={`${CN}__input-wrapper`}>
        <label htmlFor="card-holder">card holder*</label>
        <input type="text" name={CN} className={`${CN}__input`} />
      </div>
      <div className={`${CN}__input-wrapper`}>
        <label htmlFor="card-number">card number*</label>
        <input type="number" name={CN} className={`${CN}__input`} />
      </div>
      <div className={`${CN}__date-cvv-wrapper`}>
        <div className={`${CN}__expiration-date-wrapper`}>
          <label htmlFor="expiration-date" className={`${CN}__expiration-date-label`}>expiration date*</label>
          <Dropdown
            menuOptions={dropdownOptions.expirationDate.months}
            value={dropdownOptions.expirationDate.months[0].label}
            onDropdownChange={onDropdownChange}
          />
          <Dropdown
            menuOptions={dropdownOptions.expirationDate.years}
            value={dropdownOptions.expirationDate.years[0].label}
            onDropdownChange={onDropdownChange}
          />
        </div>
        <div className={`${CN}__input-wrapper`}>
          <label htmlFor="cvv">cvv*</label>
          <input type="password" name={CN} className={`${CN}__input ${CN}__cvv`} />
        </div>
      </div>


    </div>
  );
};

export default Payment;
