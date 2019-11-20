import React, { Component } from 'react';
import ls from 'local-storage';
import { Link } from 'react-router-dom';

import { Button } from '@/shared';

import './RegisterForm.scss';

const CN = 'register-form';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
      // password: '',
      // name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: ls.get('emailToRegister') || ''
    });
  }

  saveToLocalStore() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div className={`${CN}`} onSubmit={this.handleSubmit}>
        <span className={`${CN}__label`}>create an account</span>
        <div className={`${CN}__wrapper`}>
          <form className={`${CN}__personal-information`}>

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
              <input className={`${CN}__field__input`} type="email" value={email} required />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>password*</label>
              <input className={`${CN}__field__input`} type="password" required />
            </div>

          </form>

          <form className={`${CN}__address-information`}>

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
              <label className={`${CN}__field__label`}>zip/postal code*</label>
              <input className={`${CN}__field__input`} type="text" required />
            </div>

            <div className={`${CN}__field`}>
              <label className={`${CN}__field__label`}>phone</label>
              <input className={`${CN}__field__input`} type="text" />
            </div>
          </form>
        </div>

        <div className={`${CN}__buttons-wrapper`}>
          <Button className="black-button">
            create an account
          </Button>
          <Link to="/login">
            Back to login
          </Link>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
