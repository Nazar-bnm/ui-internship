import React from 'react';
import { icons } from '../../config/Footer';
import './ContactDetails.scss';

function ContactDetails() {
  return (
    <div style={{ backgroundColor: 'black' }} className="container">
      <div className="container col-6"><h3 className="title">Connect us</h3></div>
      <div className="container col-6">
        {icons.map((icon) => (
          <div key={icon.name} className="icon-item">
            <a href={icon.link} target="blank">
              <i className={`${icon.name} icon big`}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
