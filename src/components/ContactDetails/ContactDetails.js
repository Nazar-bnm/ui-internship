import React from 'react';
import { icons } from '../../config/Footer';
import './ContactDetails.scss';

function ContactDetails() {
  return (
    <div className="container">
      <div className="container col-6">
        <h3 className="title">Connect us</h3>
      </div>
      <div className="container col-6">
        {icons.map(({ name, link }) => (
          <div key={name} className="icon-item">
            <a href={link} target="blank">
              <i className={`${name} icon big`}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
