import React from 'react';
import cx from 'classnames';

import { Dropdown, Button } from '@/shared';

const CN = 'billing-info';

class BillingInfo extends React.Component {
  render() {
    return (
      <div className={cx(CN)}>
        <form>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="first-name">first name*</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="company">Company</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address1">address 1</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <Dropdown />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <Dropdown />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="phone">phone</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">password*</label>
            <input type="password" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="last-name">last name*</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="e-mail">e-mail address*</label>
            <input type="email" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address2">address 2</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>

          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">password*</label>
            <input type="password" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="city">city</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="zipcode">zip / postal code*</label>
            <input type="text" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="fax">fax</label>
            <input type="fax" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="confirm-password">confirm password*</label>
            <input type="confirm-password" name={CN} className={`${CN}__radiobtn-input`} />
          </div>
        </form>
        <form>
          <div className={`${CN}__radiobtn`}>
            <input type="radio" name="ship-to-this-address" value="ship-to-this-address" className={`${CN}__radiobtn-input`} />
            <label htmlFor="ship-to-this-address">Ship to this address</label>
          </div>
          <div className={`${CN}__radiobtn`}>
            <input type="radio" name="ship-to-this-address" value="ship-to-different-address" className={`${CN}__radiobtn-input`} />
            <label htmlFor="ship-to-different-address">Ship to this address</label>
            <label htmlFor="guest">Ship to a different address</label>
          </div>
        </form>
        <input type="checkbox" />
        I want to subscribe to the newsletter
        <Button customClass="login-register__button">continue</Button>
      </div>
    );
  }
}

export default BillingInfo;
