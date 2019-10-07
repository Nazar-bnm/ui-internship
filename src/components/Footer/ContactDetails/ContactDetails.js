import React from 'react';
import { icons } from '../../../config/footer';

import './ContactDetails.scss';

const CN = 'contact-block';

function ContactDetails() {
  return (
    <div className={`${CN}`}>
      <div className={`${CN}__title`}>
        <h4>Connect us</h4>
      </div>
      <div className={`${CN}__icons`}>
        {icons.map(({ name, link }) => (
          <div key={name} className={`${CN}__item`}>
            <a href={link} target="blank">
              <i className={`${name} icon large`}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
