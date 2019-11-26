/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import ls from 'local-storage';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { VALIDATION_FAILED, LOGIN_FAILED, LOGIN_SUCCESS } from '../../constants/notificationData';

import './RegisterForm.scss';
import HttpService from '@/service/HttpService/httpService';

const CN = 'register-form';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: {
        company: '',
        address: '',
        country: '',
        city: '',
        zip: '',
        phone: ''
      }
    };

    this.formRegister = React.createRef();
    this.validate = this.validate.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  setFirstName(val) {
    this.setState({ firstName: val });
  }

  setLastName(value) {
    this.setState({ lastName: value });
  }

  setEmail(value) {
    this.setState({ email: value });
  }

  setPassword(value) {
    this.setState({ password: value });
  }

  setCompany(value) {
    const { address } = this.state;
    this.setState({ address: { ...address, company: value } });
  }

  setAddress(value) {
    const { address } = this.state;
    this.setState({ address: { ...address, address: value } });
  }

  setCity(value) {
    const { address } = this.state;
    this.setState({ address: { ...address, city: value } });
  }

  setZip(value) {
    const { address } = this.state;
    this.setState({ address: { ...address, zip: value } });
  }

  setPhone(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, phone: val } });
  }

  selectCountry(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, country: val } });
  }

  selectRegion(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, region: val } });
  }

  validate({ target }) {
    const { showMessage } = this.props;

    const clickedButton = target.innerText.toUpperCase();
    let isInputValid = false;

    isInputValid = this.formRegister.current.reportValidity();

    if (!isInputValid) {
      showMessage(VALIDATION_FAILED);
    } else {
      this.sendData();
    }

    return isInputValid;
  }


  async sendData() {
    const { showMessage } = this.props;
    const userAPI = new HttpService();
    const signupURL = `${process.env.SERVER_URL}/signup`;
    const {
      firstName,
      lastName,
      email,
      password,
      address
    } = this.state;
    const userData = {
      firstName,
      lastName,
      email,
      password,
      address
    };

    try {
      const response = await userAPI.post(signupURL, userData);
      const errorMessage = response.data.message;

      if (errorMessage) {
        showMessage(LOGIN_FAILED);
      } else {
        showMessage(LOGIN_SUCCESS);
      }
    } catch (error) {
      showMessage(LOGIN_FAILED);
    }
  }


  render() {
    const { email, address: { country, region } } = this.state;

    return (
      <form
        className={cx(CN)}
        onSubmit={(e) => e.preventDefault()}
        ref={this.formLogin}
      >
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
                required
                onChange={(val) => this.setFirstName(val.target.value)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>last name*</label>
              <input
                name="lastName"
                className={`${CN}__field__input`}
                type="text"
                required
                onChange={(val) => this.setLastName(val.target.value)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>e-mail*</label>
              <input
                name="email"
                className={`${CN}__field__input`}
                type="email"
                id="email"
                defaultValue={email}
                required
                onChange={(val) => this.setEmail(val.target.value)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>password*</label>
              <input
                name="password"
                className={`${CN}__field__input`}
                type="password"
                required
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                onChange={(val) => this.setPassword(val.target.value)}
              />
            </div>
          </div>

          <div className={`${CN}__address-information ${CN}__wrapper__address-information`}>

            <h3>address information</h3>
            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>company</label>
              <input className={`${CN}__field__input`} type="text" onChange={(val) => this.setCompany(val.target.value)} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address</label>
              <input className={`${CN}__field__input`} type="text" onChange={(val) => this.setAddress(val.target.value)} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>country</label>
              <CountryDropdown
                className={`${CN}__field__country`}
                value={country}
                onChange={(val) => this.selectCountry(val)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>region</label>
              <RegionDropdown
                className={`${CN}__field__country`}
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>city</label>
              <input className={`${CN}__field__input`} type="text" onChange={(val) => this.setCity(val.target.value)} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>zip/postal code</label>
              <input className={`${CN}__field__input`} type="number" onChange={(val) => this.setZip(val.target.value)} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="number" onChange={(val) => this.setPhone(val.target.value)} />
            </div>
          </div>
        </div>

        <div className={`${CN}__buttons-wrapper`}>
          <button
            type="submit"
            className="black-button"
            onClick={this.validate}
          >
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
