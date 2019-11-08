import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.scss';

import circle from '../../assets/img/preloader/circle.svg';

// const CN = 'preloader';

const Preloader = (props) => {
  // setTimeout(() => {
  //   dispatch(isHideNotification());
  // }, 4000); 


  const { overlay, timeout } = props;
  return (
    <div className={overlay ? 'preloader-wrapper overlayStyle' : 'preloader-wrapper'}>
      <div className="preloader">
        <img src={circle} alt="preloder" />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  overlay: PropTypes.string,
  timeout: PropTypes.string
};

Preloader.defaultProps = {
  overlay: null,
  timeout: 1
};

export default Preloader;
