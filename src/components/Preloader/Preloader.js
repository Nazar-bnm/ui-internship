import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.scss';

import circle from '../../assets/img/preloader/circle.svg';

const Preloader = (props) => {
  const { overlay, size } = props;
  return (
    <div className={overlay ? 'preloader-wrapper overlayStyle' : 'preloader-wrapper'}>
      <div className="preloader">
        <img src={circle} alt="preloder" style={{ height: size }} />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  overlay: PropTypes.string
};

Preloader.defaultProps = {
  overlay: null
};

export default Preloader;
