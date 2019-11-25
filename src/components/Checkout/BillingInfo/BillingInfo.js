import React from 'react';
import cx from 'classnames';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button } from '@/shared';
import { VALIDATION_FAILED } from '../../../constants/notificationData';

import './BillingInfo.scss';

const CN = 'billing-info';

class BillingInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPassword: '',
      isChecked: true,
      country: '',
      region: ''
    };

    this.form = React.createRef();
    this.validate = this.validate.bind(this);
    this.setPasswordToState = this.setPasswordToState.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
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

    if (!isInputValid || inputPassword !== confirmedPassword) {
      showMessage(VALIDATION_FAILED);
    }

    return isInputValid;
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { isChecked, country, region } = this.state;

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
            <input type="text" name={CN} className={`${CN}__input`} required />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="company">company</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="e-mail">e-mail address*</label>
            <input type="email" name={CN} className={`${CN}__input`} required />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address1">address 1</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="address2">address 2</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}-selector-wrapper`}>
            <h5 className={`${CN}-selector__title`}>country</h5>
            <div className={`${CN}-selector-container`}>
              <CountryDropdown
                class={`${CN}-selector-container__selector`}
                value={country}
                onChange={this.selectCountry}
              />
              <i className={`sort icon ${CN}-selector-container__icon`} />
            </div>
          </div>
          <div className={`${CN}__input-wrapper`}>
            <label htmlFor="city">city</label>
            <input type="text" name={CN} className={`${CN}__input`} />
          </div>
          <div className={`${CN}-selector-wrapper`}>
            <h5 className={`${CN}-selector__title`}>region</h5>
            <div className={`${CN}-selector-container`}>
              <RegionDropdown
                class={`${CN}-selector-container__selector`}
                country={country}
                value={region}
                onChange={this.selectRegion}
              />
              <i className={`sort icon ${CN}-selector-container__icon`} />
            </div>
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
              onChange={() => {}}
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
              onChange={() => {}}
            />
            <label htmlFor="guest">Ship to a different address</label>
          </div>
        </form>
        <div className={`${CN}__checkbox-wrapper`}>
          <input
            className={`${CN}__radiobtn-input`}
            type="checkbox"
            onChange={() => {}}
          />
          I want to subscribe to the newsletter
        </div>
        <Button className="black-button" onClick={this.validate}>
          continue
        </Button>
      </div>
    );
  }
}

export default BillingInfo;
