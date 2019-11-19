import React from 'react';
import ls from 'local-storage';

import { Button } from '@/shared';
import { VALIDATION_FAILED } from '../../constants/notificationData';

import './LoginPage.scss';

const CN = 'login-page';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailToLogin: '',
      passwordToLogin: '',
      emailToRegister: ''
    };

    this.formLogin = React.createRef();
    this.formRegister = React.createRef();

    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    this.setState({
      emailToLogin: ls.get('emailToLogin') || '',
      passwordToLogin: ls.get('passwordToLogin') || '',
      emailToRegister: ls.get('emailToRegister') || ''
    });
  }

  saveToLocalStorage() {
    const emailToLoginValue = this.emailToLogin.value;
    const passwordToLoginValue = this.passwordToLogin.value;
    const emailToRegisterValue = this.emailToRegister.value;
    ls.set('emailToLogin', emailToLoginValue);
    ls.set('passwordToLogin', passwordToLoginValue);
    ls.set('emailToRegister', emailToRegisterValue);
  }

  validate(e) {
    const { showMessage } = this.props;
    const clickedButton = e.target.innerText.toUpperCase();
    let isInputValid = true;
    if (clickedButton === 'LOGIN') {
      isInputValid = this.loginInputs.reportValidity();
    } else {
      isInputValid = this.formRegister.reportValidity();
    }

    if (!isInputValid) {
      showMessage(VALIDATION_FAILED);
    } else {
      this.saveToLocalStorage();
    }

    return isInputValid;
  }

  render() {
    const { emailToLogin, passwordToLogin, emailToRegister } = this.state;

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
              ref={(formLogin) => { this.loginInputs = formLogin; return (this.loginInputs); }}
              onSubmit={(e) => e.preventDefault()}
            >
              <span className={`${CN}__label`}>e-mail*</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${CN}__input`}
                ref={(formLogin) => { this.emailToLogin = formLogin; return (this.emailToLogin); }}
                defaultValue={emailToLogin}
                required
              />
              <br />
              <span className={`${CN}__label`}>password*</span>
              <br />
              <input
                type="password"
                name="password"
                className={`${CN}__input`}
                ref={(formLogin) => { this.passwordToLogin = formLogin; return (this.passwordToLogin); }}
                defaultValue={passwordToLogin}
                required
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              />
              <br />
            </form>
            <div className={`${CN}__button-and-link-wrapper`}>
              <Button
                className="black-button"
                onClick={this.validate}
              >
                Login
              </Button>
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
            <form
              className={`${CN}__new-customer-input-wrapper`}
              ref={(registrationEmailForm) => { this.formRegister = registrationEmailForm; return (this.formRegister); }}
            >
              <span className={`${CN}__label`}>e-mail*</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${CN}__input`}
                ref={(registrationEmailInput) => { this.emailToRegister = registrationEmailInput; return (this.emailToRegister); }}
                defaultValue={emailToRegister}
                required
              />
            </form>
            <Button
              className="black-button"
              onClick={this.validate}
            >
            create an account
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
