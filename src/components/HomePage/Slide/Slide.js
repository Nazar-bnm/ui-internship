import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Slide.scss';

const CN = 'slide-info';

const Slide = ({ title, description, buttonName, className }) => {
  return (
    <div className={cx(CN, className)}>
      <h1 className={`${CN}-title`} >{title}</h1>
      <p className={`${CN}-description`}>{description}</p>
      <button className={`${CN}-button`}>
        {buttonName}
      </button>
    </div>
  );
};

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
