/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

const slide = ({ bgImage, animation, onAnimationEnd, style, children }) => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <div className={'slide-container'} style={style}>
      <div className={`slide-info ${animation}`} style = {bgStyle}onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    </div>
  );
};


slide.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  clicked: PropTypes.func,
  className: PropTypes.string,
};

slide.defaultProps = {
  left: false,
  right: false,
  clicked: () => {},
  className: '',
};

export default slide;
