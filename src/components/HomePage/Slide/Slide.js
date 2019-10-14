import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Slide.scss';

const CN = 'slide-info';

const Slide = ({ title, description, buttonName, className }) => (
  <div className={cx(CN, className)}>
    <h1 className={`${CN}__title`} >{title}</h1>
    <p className={`${CN}__description`}>{description}</p>
    <button className={`${CN}__button`}>
      {buttonName}
    </button>
  </div>
);

Slide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonName: PropTypes.string,
  className: PropTypes.string,
};

Slide.defaultProps = {
  title: '',
  description: '',
  buttonName: '',
  className: '',
};

export default Slide;
