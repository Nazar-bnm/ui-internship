import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './SlideContainer.scss';

const CN = 'slide';

const SlideContainer = ({ bgImage, animation, onAnimationEnd, transform, children }) => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  const transformStyle = {
    transform: transform,
  };

  return (
    <div className={`${CN}__container`} style={transformStyle}>
      <div className={cx(`${CN}__wrapper`, animation)} style = {bgStyle} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    </div>
  );
};

SlideContainer.propTypes = {
  bgImage: PropTypes.string,
  animation: PropTypes.string,
  onAnimationEnd: PropTypes.func,
  transform: PropTypes.string,
  children: PropTypes.node,
};

SlideContainer.defaultProps = {
  bgImage: '',
  animation: '',
  onAnimationEnd: () => {},
  transform: 'none',
  children: null,
};

export default SlideContainer;
