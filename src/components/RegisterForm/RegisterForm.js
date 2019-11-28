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
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  setAddressValue(value, fieldName) {
    const { address } = this.state;
    const copiedAddress = { ...address };

    if (fieldName === 'postalCode') {
      copiedAddress[fieldName] = +value;
      this.setState({ address: { ...copiedAddress } });
    } else
    if (fieldName === 'phone') {
      copiedAddress[fieldName] = +value;
      this.setState({ address: { ...copiedAddress } });
    } else {
      copiedAddress[fieldName] = value;
      this.setState({ address: { ...copiedAddress } });
    }
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
                onChange={(evt) => this.setFirstName(evt.target.value)}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>last name*</label>
              <input
                name="lastName"
                className={`${CN}__field__input`}
                type="text"
                required
                onChange={(evt) => this.setLastName(evt.target.value)}
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
                onChange={(evt) => this.setEmail(evt.target.value)}
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
                onChange={(evt) => this.setPassword(evt.target.value)}
              />
            </div>
          </div>

          <div className={`${CN}__address-information ${CN}__wrapper__address-information`}>

            <h3>address information</h3>
            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>company</label>
              <input className={`${CN}__field__input`} type="text" onChange={(evt) => this.setAddressValue(evt.target.value, 'company')} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address</label>
              <input className={`${CN}__field__input`} type="text" onChange={(evt) => this.setAddressValue(evt.target.value, 'addressOne')} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>country</label>
              <CountryDropdown
                className={`${CN}__field__country`}
                value={country}
                onChange={(evt) => this.setAddressValue(evt, 'country')}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>region</label>
              <RegionDropdown
                className={`${CN}__field__country`}
                country={country}
                value={region}
                onChange={(evt) => this.setAddressValue(evt, 'region')}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>city</label>
              <input className={`${CN}__field__input`} type="text" onChange={(evt) => this.setAddressValue(evt.target.value, 'city')} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>zip/postal code</label>
              <input className={`${CN}__field__input`} type="number" onChange={(evt) => this.setAddressValue(evt.target.value, 'postalCode')} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="number" onChange={(evt) => this.setAddressValue(evt.target.value, 'phone')} />
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
          <Link className="link-back" to="/login">
            Back to login
          </Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
