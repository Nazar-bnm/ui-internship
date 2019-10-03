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
    const emailRegEx = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;
    const { fieldValidationError } = this.state.formError;
    let emailValid = this.state.emailValid;

    emailValid = value.match(emailRegEx);
    fieldValidationError.email;
    // = emailValid ? '' : ' is invalid';

    this.setState({ formError: fieldValidationError,
      emailValid: emailValid,
      warning: 'warning',
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  render() {
    return (
      <form className="join-us">
        <label htmlFor="email" className="title">newsletter</label>
        <div className="join-us-wrapper">
          <div className="input-wrapper">
            <input type="email" required name="email"
              value={this.state.email}
              onChange={(e)=>this.handleInput(e)}
              className={`email-input ${this.state.warning}`} />
            <button className="btn" type="submit" disabled={!this.state.formValid}>
              <i className="chevron right icon"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default JoinUs;
