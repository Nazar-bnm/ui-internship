import React, { Component } from 'react';
import ls from 'local-storage';
import cx from 'classnames';

import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';
import { Button } from '@/shared';
import Preloader from '../Preloader';
import { googleMapAPIKeyUserLocation } from '../../config/googleMapAPIKeyUserLocation';
import {
  VALIDATION_FAILED,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  GET_LOCATION_FAILED
} from '../../constants/notificationData';
import { setTimeoutForPreloader } from '../../helpers';
import { proxy, googleMapsGeocodeURL } from '../../constants';

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
        region: '',
        city: '',
        postalCode: '',
        phone: ''
      },
      isLoading: false
    };

    this.formRegister = React.createRef();
    this.validate = this.validate.bind(this);
    this.sendData = this.sendData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserCoordinates = this.getUserCoordinates.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.onGetLocationSuccess = this.onGetLocationSuccess.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  onGetLocationSuccess(data) {
    const fullAddress = data.results[0].formatted_address.split(', ');
    const addressOne = `${fullAddress[0]} ${fullAddress[1]}`;
    const city = fullAddress[2];
    const country = fullAddress[4];
    const postalCode = fullAddress[5];
    const { address } = this.state;
    this.setState({
      address: {
        ...address,
        addressOne,
        country,
        city,
        postalCode
      }
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

  async getPosition(position) {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    const requestURL = `${proxy}${googleMapsGeocodeURL}/json?latlng=${lat},${lon}&key=${googleMapAPIKeyUserLocation}`;
    const userAPI = new HttpService();
    const { showMessage } = this.props;

    try {
      const response = await userAPI.get(requestURL);

      this.onGetLocationSuccess(response.data);
    } catch (error) {
      showMessage(GET_LOCATION_FAILED);
    }
    setTimeoutForPreloader.bind(this)();
  }

  getUserCoordinates() {
    const { showMessage } = this.props;

    this.setState({
      isLoading: true
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition, this.showError);
    } else {
      showMessage(GET_LOCATION_FAILED);
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

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const URL = '/api/form-submit-url';

    fetch(URL, {
      method: 'POST',
      body: data
    });
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
    const {
      email,
      address: {
        addressOne,
        country,
        city,
        postalCode
      },
      isLoading
    } = this.state;

    return (
      <form
        className={cx(CN, { [`${CN}--loader`]: isLoading })}
        onSubmit={this.handleSubmit}
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
                id="emil"
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
              <Button className="grey-button" onClick={this.getUserCoordinates}>Use data from GPS</Button>
              <label className={`${CN}__field__label`}>company</label>
              <input className={`${CN}__field__input`} type="text" onChange={(evt) => this.setAddressValue(evt.target.value, 'company')} />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address 1</label>
              <input
                className={`${CN}__field__input`}
                type="text"
                defaultValue={addressOne !== '' ? addressOne : null}
                onChange={(evt) => this.setAddressValue(evt.target.value, 'addressOne')}
              />

            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>country</label>
              <CountryDropdown
                className={`${CN}__field__country`}
                value={country}
                defaultValue={country !== '' ? country : null}
                onChange={(evt) => this.setAddressValue(evt, 'country')}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>city</label>
              <input
                value={city}
                className={`${CN}__field__input`}
                type="text"
                defaultValue={city !== '' ? city : null}
                onChange={(evt) => this.setAddressValue(evt.target.value, 'city')}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>zip/postal code*</label>
              <input
                className={`${CN}__field__input`}
                type="number"
                defaultValue={postalCode !== '' ? postalCode : null}
                onChange={(evt) => this.setAddressValue(evt.target.value, 'postalCode')}
                required
              />
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
        {isLoading && <Preloader />}
      </form>
    );
  }
}

export default RegisterForm;
