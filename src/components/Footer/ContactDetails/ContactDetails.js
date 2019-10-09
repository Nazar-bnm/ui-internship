import React from 'react';
import { icons } from '../../../config/Footer';

import './ContactDetails.scss';

const CN = 'contact-block';

const ContactDetails = () => {
  return (
    <div className={`${CN}`}>
      <div className={`${CN}__title`}>
        <h4>Connect us</h4>
      </div>
      <ul className={`${CN}__icons`}>
        {icons.map(({ name, link }) => (
          <li key={name} className={`${CN}__item`}>
            <a href={link} target="blank">
              <i className={`${name} icon large`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
