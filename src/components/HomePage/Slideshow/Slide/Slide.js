import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Slide.scss';

const slide = ({ bgImage, animation, onAnimationEnd, style, children }) => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  const CN = 'slide';

  return (
    <div className={`${CN}-container`} style={style}>
      <div className={cx(`${CN}-wrapper`, [animation])} style = {bgStyle} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    </div>
  );
};

slide.propTypes = {
  bgImage: PropTypes.string,
  animation: PropTypes.string,
  onAnimationEnd: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
};

slide.defaultProps = {
  bgImage: '',
  animation: '',
  onAnimationEnd: () => {},
  style: {},
  children: PropTypes.node,
};

export default slide;
