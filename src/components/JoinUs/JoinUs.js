import React, { Component } from 'react';
import './JoinUs.scss';

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      warning: '',
      formError: { email: '' },
      emailValid: false,
      formValid: false,
    };
  }

  handleInput(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(value);
    });
  }

  validateField(value) {
    const isEmailValid = value.match(emailRegEx);
    this.setState({ isEmailValid });
  }

  render() {
    const { isEmailValid, email } = this.state;

    return (
      <form className="join-us">
        <label htmlFor="email" className="join-us__title">newsletter</label>
        <div className="join-us-wrapper">
          <div className="input-wrapper">
            <input type="email" required name="email"
              value={email}
              onChange={this.handleInput}
              className={cx('email-input', { warning: !isEmailValid }, { success: isEmailValid })}
            />
            <button className="btn" type="submit">
              <i className="chevron right icon" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default JoinUs;
