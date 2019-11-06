import React from 'react';
import cx from 'classnames';

import { Dropdown, Button } from '@/shared';

import './BillingInfo.scss';

const CN = 'billing-info';

class BillingInfo extends React.Component {
  render() {
    return (
      <div className={cx(CN)}>
        <form className={`${CN}__form`}>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="first-name">first name*</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="last-name">last name*</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="company">Company</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="e-mail">e-mail address*</label>
            <input type="email" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address1">address 1</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address2">address 2</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <p>country</p>
            <Dropdown />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">city</label>
            <input type="password" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <p>state</p>
            <Dropdown />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="zipcode">zip / postal code*</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="phone">phone</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="fax">fax</label>
            <input type="fax" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">password*</label>
            <input type="password" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="confirm-password">confirm password*</label>
            <input type="confirm-password" name={CN} className={`${CN}__input`} />
          </div>
        </form>
        <form className={`${CN}__radiobtns-form`}>
          <div className={`${CN}__radiobtn`}>
            <input className={`${CN}__radiobtn-input`} type="radio" name="ship-to-this-address" value="ship-to-this-address" />
            <label htmlFor="ship-to-this-address">Ship to this address</label>
          </div>
          <div className={`${CN}__radiobtn`}>
            <input className={`${CN}__radiobtn-input`} type="radio" name="ship-to-this-address" value="ship-to-different-address" />
            <label htmlFor="guest">Ship to a different address</label>
          </div>
        </form>
        <div className={`${CN}__checkbox-wrapper`}>
          <input type="checkbox" />
          I want to subscribe to the newsletter
        </div>
        <Button customClass="login-register__button">continue</Button>
      </div>
    );
  }
}

export default BillingInfo;
