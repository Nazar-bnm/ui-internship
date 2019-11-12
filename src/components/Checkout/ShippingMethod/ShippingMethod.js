import React from 'react';
import cx from 'classnames';

import { Button } from '@/shared';

import './ShippingMethod.scss';

const CN = 'shipping-method';

const ShippingMethod = () => (
  <div className={cx(CN)}>
    <p className={`${CN}__text`}>Please choose a shipping method to deliver your order:</p>
    <form className={`${CN}__radiobtns-form`}>
      <div className={`${CN}__radiobtn`}>
        <input
          className={`${CN}__radiobtn-input`}
          type="radio"
          name="ship-to-this-address"
          value="ship-to-this-address"
        />
        <label htmlFor="ship-to-this-address">UPS (ground) $7.25</label>
      </div>
      <div className={`${CN}__radiobtn`}>
        <input
          className={`${CN}__radiobtn-input`}
          type="radio"
          name="ship-to-this-address"
          value="ship-to-different-address"
        />
        <label htmlFor="guest">UPS (7 days select) $9.75</label>
      </div>
      <div className={`${CN}__radiobtn`}>
        <input
          className={`${CN}__radiobtn-input`}
          type="radio"
          name="ship-to-this-address"
          value="ship-to-different-address"
        />
        <label htmlFor="guest">UPS (next day air) $17.25</label>
      </div>
      <div className={`${CN}__radiobtn`}>
        <input
          className={`${CN}__radiobtn-input`}
          type="radio"
          name="ship-to-this-address"
          value="ship-to-different-address"
        />
        <label htmlFor="guest">UPS (second day air) $12.25</label>
      </div>
    </form>
    <Button className="black-button">continue</Button>
  </div>
);

export default ShippingMethod;
