import React from 'react';
import cx from 'classnames';

import './Payment.scss';

const CN = 'payment';

const Payment = () => (
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
        <div className={`${CN}__payment-input-wrapper`}>
          <input
            type="number"
            name="expiration-date"
            className={`${CN}__payment-input`}
            placeholder="Year"
          />
          <input
            type="number"
            name="expiration-date"
            className={`${CN}__payment-input`}
            placeholder="Month"
          />
        </div>
      </div>
      <div className={`${CN}__input-wrapper`}>
        <label htmlFor="cvv">cvv*</label>
        <input type="password" name={CN} className={`${CN}__input ${CN}__cvv`} />
      </div>
    </div>
  </div>
);

export default Payment;