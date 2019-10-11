import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../../config';

import './ContactDetails.scss';

const CN = 'contact-block';

const ContactDetails = ({ title }) => {
  const { icons } = config;
  return (
    <div className={`${CN}`}>
      <div className={`${CN}__title`}>
        <h4>{title}</h4>
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

ContactDetails.propTypes = {
  title: PropTypes.string,
};

ContactDetails.defaultProps = {
  title: '',
};

export default ContactDetails;
