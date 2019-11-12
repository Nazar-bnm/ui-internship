import React from 'react';
import cx from 'classnames';

import { Button } from '@/shared';
import { VALIDATION_FAILED } from '../../../constants/notificationData';

import './LoginRegister.scss';

const CN = 'login-register';

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { showMessage } = this.props;

    if (!this.form.current.reportValidity()) {
      showMessage(VALIDATION_FAILED);
      return this.form.current.reportValidity();
    }

    return this.form.current.reportValidity();
  }

  render() {
    return (
      <div className={cx(CN)}>
        <div className={`${CN}__registration-type-wrapper`}>
          <h3 className={`${CN}__heading`}>Registered customers</h3>
          <p className={`${CN}__text`}>
            <strong>Already registered? </strong>
                Please login below:
          </p>
          <form
            className={`${CN}__inputs-wrapper`}
            ref={this.form}
            onSubmit={(e) => e.preventDefault()}
          >
            <span className={`${CN}__label`}>e-mail*</span>
            <br />
            <input
              type="email"
              name="email"
              className={`${CN}__input`}
              required
            />
            <br />
            <span className={`${CN}__label`}>password*</span>
            <br />
            <input
              type="password"
              name="password"
              className={`${CN}__input`}
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            />
            <br />
          </form>
          <div className={`${CN}__button-and-link-wrapper`}>
            <Button className="black-button" onClick={this.validate}>Log in &#38; Checkout</Button>
            <a className={`${CN}__link`} href="/" onClick={(e) => e.preventDefault()}>Password Help</a>
          </div>
        </div>
        <div className={`${CN}__registration-type-wrapper`}>
          <h3 className={`${CN}__heading`}>New customers</h3>
          <p className={`${CN}__text`}><strong>Register and save time!</strong></p>
          <p className={`${CN}__text`}>
                Register with us for future convenience:
            <br />
                Fast and easy checkout
            <br />
                Easy access to your order history and status
          </p>
          <form>
            <div className={`${CN}__radiobtn`}>
              <input
                type="radio"
                name="register"
                value="register"
                className={`${CN}__radiobtn-input`}
              />
              <label htmlFor="register">Register</label>
            </div>
            <div className={`${CN}__radiobtn`}>
              <input
                type="radio"
                name="register"
                value="guest"
                className={`${CN}__radiobtn-input`}
                checked
              />
              <label htmlFor="guest">Checkout as guest</label>
            </div>
          </form>
          <Button className="black-button">Continue</Button>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
