/* eslint-disable no-console */
import React, { Component } from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';

import './RegisterForm.scss';

const CN = 'register-form';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { formErrors } = this.state;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'invalid email address';
        break;
      case 'password':
        formErrors.password = value.length < 6 ? 'minimum 6 characaters required' : '';
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);

    // const URL = '/api/form-submit-url';

    // fetch(URL, {
    //   method: 'POST',
    //   body: data
    // });

    const {
      firstName,
      lastName,
      email,
      password
    } = this.state;

    if (formValid(this.state)) {
      console.log(`
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}
      `);
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }

  render() {
    const { email } = this.state;
    const { formErrors } = this.state;

    return (
      <form className={`${CN}`} onSubmit={this.handleSubmit} noValidate>
        <span className={`${CN}__label`}>create an account</span>
        <div className={`${CN}__wrapper`}>
          <div className={`${CN}__personal-information ${CN}__wrapper__personal-information`}>

            <h3>personal information</h3>
            <div className={`${CN}__field`}>
              <label htmlFor="firstName" className={`${CN}__field__label`}>first name*</label>
              <input
                name="firstName"
                className={`${CN}__field__input`}
                type="text"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>last name*</label>
              <input
                name="lastName"
                className={`${CN}__field__input`}
                type="text"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>e-mail*</label>
              <input
                name="email"
                className={`${CN}__field__input`}
                type="email"
                id="email"
                defaultValue={email}
                noValidate
                onChange={this.handleChange}
              />
            </div>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>password*</label>
              <input
                name="password"
                className={`${CN}__field__input`}
                type="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>

          <div className={`${CN}__address-information ${CN}__wrapper__address-information`}>

            <h3>address information</h3>
            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>company</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address 1</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address 2</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>country</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>city</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>zip/postal code</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="number" />
            </div>
          </div>
        </div>

        <div className={`${CN}__buttons-wrapper`}>
          <button type="submit" className="black-button">
            create an account
          </button>
          <Link to="/login">
            Back to login
          </Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
