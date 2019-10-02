import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';
import { Link } from 'react-router-dom';

const slide = ({ title, description, imageUrl, bgImage }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <div className="slide-info" style={style}>
      <h1 className="slide-info-title ">{title}</h1>
      <p className="slide-info-description fade">
        {description}
      </p>
      <button>shop women's accessories</button>
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
