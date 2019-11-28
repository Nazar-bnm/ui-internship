import React from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';

import { Button } from '@/shared';
import HttpService from '../../service/HttpService/httpService';
import { VALIDATION_FAILED, LOGIN_FAILED, LOGIN_SUCCESS } from '../../constants/notificationData';

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
    const emailToLoginValue = this.formLogin.current[0].value;
    const passwordToLoginValue = this.formLogin.current[1].value;
    const emailToRegisterValue = this.formRegister.current[0].value;

    ls.set('emailToLogin', emailToLoginValue);
    ls.set('passwordToLogin', passwordToLoginValue);
    ls.set('emailToRegister', emailToRegisterValue);
  }

  async doesUserExist() {
    const { showMessage } = this.props;
    const userAPI = new HttpService();
    const usersURL = `${process.env.SERVER_URL}/login`;
    const emailToLoginValue = this.formLogin.current[0].value;
    const passwordToLoginValue = this.formLogin.current[1].value;
    const currentUser = {
      email: emailToLoginValue,
      password: passwordToLoginValue
    };

    try {
      const response = await userAPI.post(usersURL, currentUser);
      const errorMessage = response.data.message;

      if (errorMessage) {
        showMessage(LOGIN_FAILED);
      } else {
        ls.set('authToken', response.data.token);
        showMessage(LOGIN_SUCCESS);
        window.history.back();
      }
    } catch (error) {
      showMessage(LOGIN_FAILED);
    }
  }

  validate({ target }) {
    const { showMessage } = this.props;
    const clickedButton = target.innerText.toUpperCase();
    let isInputValid = false;

    isInputValid = (clickedButton === 'LOGIN' ? this.formLogin : this.formRegister).current.reportValidity();

    if (!isInputValid) {
      showMessage(VALIDATION_FAILED);
    } else {
      this.saveToLocalStorage();
      this.doesUserExist();
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
              ref={this.formLogin}
              onSubmit={(e) => e.preventDefault()}
            >
              <span className={`${CN}__label`}>e-mail*</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${CN}__input`}
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
              ref={this.formRegister}
            >
              <span className={`${CN}__label`}>e-mail*</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${CN}__input`}
                defaultValue={emailToRegister}
                required
              />
            </form>
            <Link to="/RegisterForm">
              <Button
                className="black-button"
                onClick={this.validate}
              >
              create an account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
