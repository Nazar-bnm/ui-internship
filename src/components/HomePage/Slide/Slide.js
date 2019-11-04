import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Button } from '@/shared';
import './Slide.scss';

const CN = 'slide-info';

const Slide = (props) => {
  const {
    title,
    description,
    buttonName,
    className
  } = props;

  return (
    <div className={cx(CN, className)}>
      <h1 className={`${CN}__title`}>{title}</h1>
      <p className={`${CN}__description`}>{description}</p>
      <Button
        className={`${CN}__button`}
        onClick={() => {}}
      >
        {buttonName}
      </Button>
    </div>
  );
};

Slide.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonName: PropTypes.string,
  className: PropTypes.string
};

Slide.defaultProps = {
  title: '',
  description: '',
  buttonName: '',
  className: ''
};

export default Slide;
