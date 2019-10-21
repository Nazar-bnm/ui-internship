import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

const CN = 'heading';

const Heading = ({ title, position }) => (
  <div className={`${CN}__wrapper`}>
    <div className={`${CN}__line`} />
    <div className={`${CN}__title ${position === 'right' ? 'right' : 'center'}`}>
      {title}
    </div>
  </div>
);

Heading.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string
};

Heading.defaultProps = {
  title: 'Default heading',
  position: 'left'
};

export default Heading;
