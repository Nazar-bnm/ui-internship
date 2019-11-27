import React, { Component } from 'react';
import ls from 'local-storage';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Button } from '@/shared';
import { VALIDATION_FAILED, REGISTER_FAILED, REGISTER_SUCCESS } from '../../constants/notificationData';

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
        addressOne: '',
        country: '',
        city: '',
        postalCode: '',
        phone: ''
      }
    };

    this.formRegister = React.createRef();
    this.validate = this.validate.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  setFirstName(val) {
    this.setState({ firstName: val });
  }

  setLastName(val) {
    this.setState({ lastName: val });
  }

  setEmail(val) {
    this.setState({ email: val });
  }

  setPassword(val) {
    this.setState({ password: val });
  }

  setCompany(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, company: val } });
  }

  setAddress(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, addressOne: val } });
  }

  setCity(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, city: val } });
  }

  setPostalCode(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, postalCode: +val } });
  }

  setPhone(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, phone: +val } });
  }

  selectCountry(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, country: val } });
  }

  selectRegion(val) {
    const { address } = this.state;
    this.setState({ address: { ...address, region: val } });
  }

  validate() {
    const { showMessage } = this.props;

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
        showMessage(REGISTER_FAILED);
      } else {
        showMessage(REGISTER_SUCCESS);
      }
    } catch (error) {
      showMessage(REGISTER_FAILED);
    }
  }


  render() {
    const { email, address: { country, region } } = this.state;

    return (
      <form
        className={cx(CN)}
        onSubmit={(e) => e.preventDefault()}
        ref={this.formRegister}
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
              <input className={`${CN}__field__input`} type="number" onChange={(val) => this.setPostalCode(val.target.value)} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="number" onChange={(val) => this.setPhone(val.target.value)} />
            </div>
          </div>
        </div>

        <div className={`${CN}__buttons-wrapper`}>
          <Button
            type="submit"
            className="black-button"
            onClick={this.validate}
          >
            create an account
          </Button>
          <Link to="/login">
            Back to login
          </Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
