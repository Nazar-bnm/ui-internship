import React, { Component } from 'react';
import ls from 'local-storage';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { Button } from '@/shared';
import Preloader from '../Preloader';
import HttpService from '../../service/HttpService/httpService';
import { googleMapAPIKeyUserLocation } from '../../config/googleMapAPIKeyUserLocation';
import { GET_LOCATION_FAILED } from '../../constants/notificationData';
import { setTimeoutForPreloader } from '../../helpers';

import './RegisterForm.scss';

const CN = 'register-form';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      country: '',
      city: '',
      street: '',
      zipCode: '',
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserCoordinates = this.getUserCoordinates.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.onGetLocationSuccess = this.onGetLocationSuccess.bind(this);
    this.showPreloader = this.showPreloader.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  onGetLocationSuccess(data) {
    const fullAddress = data.results[0].formatted_address.split(', ');
    const street = `${fullAddress[0]} ${fullAddress[1]}`;
    const city = fullAddress[2];
    const country = fullAddress[4];
    const zipCode = fullAddress[5];
    this.setState({
      street,
      city,
      country,
      zipCode
    });
  }

  async getPosition(position) {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const requestURL = `${proxy}https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${googleMapAPIKeyUserLocation}`;
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
    this.showPreloader();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition, this.showError);
    } else {
      showMessage(GET_LOCATION_FAILED);
    }
  }

  saveToLocalStore() {

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

  showPreloader() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Preloader />;
    }
  }

  render() {
    const {
      email,
      street,
      city,
      country,
      zipCode,
      isLoading
    } = this.state;

    return (
      <form className={cx(CN, { [`${CN}--loader`]: isLoading })} onSubmit={this.handleSubmit}>
        <span className={`${CN}__label`}>create an account</span>
        <div className={`${CN}__wrapper`}>
          <div className={`${CN}__personal-information ${CN}__wrapper__personal-information`}>

            <h3>personal information</h3>
            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>first name*</label>
              <input className={`${CN}__field__input`} type="text" required />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>last name*</label>
              <input className={`${CN}__field__input`} type="text" required />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>e-mail*</label>
              <input
                className={`${CN}__field__input`}
                type="email"
                id="email"
                value={email}
                required
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>password*</label>
              <input className={`${CN}__field__input`} type="password" required />
            </div>

          </div>

          <div className={`${CN}__address-information ${CN}__wrapper__address-information`}>

            <h3>address information</h3>
            <div className={`${CN}__field`}>
              <Button className="grey-button" onClick={this.getUserCoordinates}>Use data from GPS</Button>
              <label className={`${CN}__field__label`}>company</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address 1</label>
              <input
                className={`${CN}__field__input`}
                type="text"
                defaultValue={street !== '' ? street : null}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>address 2</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>country</label>
              <input
                className={`${CN}__field__input`}
                type="text"
                defaultValue={country !== '' ? country : null}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>city</label>
              <input
                className={`${CN}__field__input`}
                type="text"
                defaultValue={city !== '' ? city : null}
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>zip/postal code*</label>
              <input
                className={`${CN}__field__input`}
                type="text"
                defaultValue={zipCode !== '' ? zipCode : null}
                required
              />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>
          </div>
        </div>

        <div className={`${CN}__buttons-wrapper`}>
          <Button className="black-button">
            create an account
          </Button>
          <Link to="/login">
            Back to login
          </Link>
        </div>
        {this.showPreloader()}
      </form>
    );
  }
}

export default RegisterForm;
