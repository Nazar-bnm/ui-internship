import React, { Component } from 'react';
import cx from 'classnames';
import './JoinUs.scss';

const emailRegEx = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: null,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    const { value } = e.target;

    this.setState({
      email: value,
      isEmailValid: this.validateField(value),
    });
  }

  validateField(value) {
    return value && value.match(emailRegEx);
  }

  render() {
    const { isEmailValid, email } = this.state;

    return (
      <form className="join-us">
        <label htmlFor="email" className="join-us__title">newsletter</label>
        <div className="join-us__wrapper">
          <div className="join-us__input-wrapper">
            <input type="email" required name="email"
              value={email}
              onChange={this.handleInput}
              className={cx('join-us__email-input', { warning: !isEmailValid }, { success: isEmailValid })}
            />
            <button className="join-us__btn" type="submit">
              <i className="chevron right icon" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default JoinUs;
