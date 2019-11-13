import React from 'react';
import cx from 'classnames';

import { Dropdown, Button } from '@/shared';
import dropdownOptions from '../../../../config';
import { VALIDATION_FAILED } from '../../../constants/notificationData';

import './BillingInfo.scss';

const CN = 'billing-info';

// This function should be replaced when the proper functionality for dropdowns is added.
const onDropdownChange = () => true;

class BillingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPassword: '',
      isChecked: true
    };

    this.form = React.createRef();
    this.validate = this.validate.bind(this);
    this.setPasswordToState = this.setPasswordToState.bind(this);
    // this.validatePassword = this.validatePassword.bind(this);
  }

  setPasswordToState() {
    const password = this.form.current[21].value;

    this.setState({
      inputPassword: password
    });
  }

  validate() {
    const { showMessage } = this.props;
    const isInputValid = this.form.current.reportValidity();
    const { inputPassword } = this.state;
    const confirmedPassword = this.form.current[22].value;

    if (!isInputValid || (inputPassword !== confirmedPassword)) {
      showMessage(VALIDATION_FAILED);
    }

    return isInputValid;
  }

  handleChange() {
    // Here will be the proper functionality is added
    return true;
  }

  render() {
    const { isChecked } = this.state;

    return (
      <div className={cx(CN)}>
        <form
          className={`${CN}__form`}
          ref={this.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="first-name">first name*</label>
            <input type="text" name={CN} className={`${CN}__input`} required />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="last-name">last name*</label>
            <input
              type="text"
              name={CN}
              className={`${CN}__input`}
              required
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="company">company</label>
            <input
              type="text"
              name={CN}
              className={`${CN}__input`}
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="e-mail">e-mail address*</label>
            <input
              type="email"
              name={CN}
              className={`${CN}__input`}
              required
            />
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
            <Dropdown
              menuOptions={dropdownOptions.billingInfo.country}
              value="Choose country..."
              onDropdownChange={onDropdownChange}
              className={`${CN}__dropdown`}
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="city">city</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <p>state</p>
            <Dropdown
              menuOptions={dropdownOptions.billingInfo.state}
              value="Choose state..."
              onDropdownChange={onDropdownChange}
              className={`${CN}__dropdown`}
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="zipcode">zip / postal code*</label>
            <input
              type="number"
              name={CN}
              className={`${CN}__input`}
              required
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="phone">phone</label>
            <input type="number" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="fax">fax</label>
            <input type="number" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">password*</label>
            <input
              type="password"
              name={CN}
              className={`${CN}__input`}
              required
              onBlur={this.setPasswordToState}
            />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="password">confirm password*</label>
            <input
              type="password"
              name={CN}
              className={`${CN}__input`}
              required
              // onBlur={this.validatePassword}
            />
          </div>
        </form>
        <form className={`${CN}__radiobtns-form`}>
          <div className={`${CN}__radiobtn`}>
            <input
              className={`${CN}__radiobtn-input`}
              type="radio"
              name="ship-to-this-address"
              value="ship-to-this-address"
              onChange={this.handleChange}
              checked={isChecked}
            />
            <label htmlFor="ship-to-this-address">Ship to this address</label>
          </div>
          <div className={`${CN}__radiobtn`}>
            <input
              className={`${CN}__radiobtn-input`}
              type="radio"
              name="ship-to-this-address"
              value="ship-to-different-address"
              onChange={this.handleChange}
            />
            <label htmlFor="guest">Ship to a different address</label>
          </div>
        </form>
        <div className={`${CN}__checkbox-wrapper`}>
          <input
            className={`${CN}__radiobtn-input`}
            type="checkbox"
            onChange={this.handleChange}
            checked={isChecked}
          />
      I want to subscribe to the newsletter
        </div>
        <Button className="black-button" onClick={this.validate}>continue</Button>
      </div>
    );
  }
}

export default BillingInfo;
