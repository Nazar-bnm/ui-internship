import React from 'react';

import { Button } from '@/shared';
import { VALIDATION_FAILED } from '../../constants/notificationData';

import './LoginPage.scss';

const CN = 'login-page';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { showMessage } = this.props;
    const isInputValid = this.form.current.reportValidity();

    if (!isInputValid) {
      showMessage(VALIDATION_FAILED);
    }

    return isInputValid;
  }

  render() {
    return (
      <div className={`${CN}__wrapper content`}>
        <h3 className={`${CN}__main-heading`}>user login</h3>
        <div className={`${CN}__login-register-wrapper`}>
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
              <Button className="black-button" onClick={this.validate}>Login</Button>
              <a
                className={`${CN}__link`}
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                Forgor your password?
              </a>
            </div>
          </div>
          <div className={`${CN}__registration-type-wrapper`}>
            <h3 className={`${CN}__heading`}>New customers</h3>
            <p className={`${CN}__text`}>
              <strong>
                Enter your email address to create an account:
              </strong>
            </p>
            <form className={`${CN}__new-customer-input-wrapper`} ref={this.form}>
              <span className={`${CN}__label`}>e-mail*</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${CN}__input`}
                required
              />
            </form>
            <Button className="black-button" onClick={this.validate}>create an account</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
