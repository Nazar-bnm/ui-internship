/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

const slide = ({ title, description, bgImage, animation, onAnimationEnd, style }) => {
  const styles = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div style={style}>
      <div className={`slide-info ${animation}`} style={styles} onAnimationEnd={onAnimationEnd}>
        <h1 className="slide-info-title ">{title}</h1>
        <p className="slide-info-description">
          {description}
        </p>
        <button className="slide-info-button">shop women&apos;s accessories</button>
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
