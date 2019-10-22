import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

const CN = 'heading';
const posEnum = {
  right: 'right',
  center: 'center'
};

const Heading = ({ title, position }) => (
  <div className={`${CN}__wrapper`}>
    <div className={`${CN}__line`} />
    <div className={`${CN}__title ${posEnum[position]}`}>
      {title}
    </div>
  </div>
);

Heading.propTypes = {
  title: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(posEnum))
};

Heading.defaultProps = {
  title: 'Default heading',
  position: 'left'
};

export default Heading;
