import React from 'react';
import cx from 'classnames';

import Button from '@/shared';
import './LoginRegister.scss';

const CN = 'login-register';

class LoginRegister extends React.Component {
  render() {
    return (
      <div className={cx(CN)}>
        <div className={`${CN}__registration-type-wrapper`}>
          <h3 className={`${CN}__heading`}>Registered customers</h3>
          <p className={`${CN}__text`}>
            <strong>Already registered? </strong>
            Please login below:
          </p>
          <div className={`${CN}__inputs-wrapper`}>
            <span className={`${CN}__label`}>e-mail*</span>
            <br />
            <input type="text" className={`${CN}__input`} />
            <br />
            <span className={`${CN}__label`}>password*</span>
            <br />
            <input type="email" className={`${CN}__input`} />
            <br />
          </div>
          <div className={`${CN}__button-and-link-wrapper`}>
            <Button customClass={`${CN}__button`}>Log in &#38; Checkout</Button>
            <a href="/">Password Help</a>
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
              <input type="radio" name="register" value="register" className={`${CN}__radiobtn-input`} />
              <label htmlFor="register">Register</label>
            </div>
            <div className={`${CN}__radiobtn`}>
              <input type="radio" name="register" value="guest" className={`${CN}__radiobtn-input`} />
              <label htmlFor="guest">Checkout as guest</label>
            </div>
          </form>
          <Button customClass={`${CN}__button`}>Continue</Button>
        </div>

      </div>
    );
  }
}

export default LoginRegister;
