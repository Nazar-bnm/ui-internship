import React from 'react';
import PropTypes from 'prop-types';
import './ArrowButton.scss';


const arrowButton = (props) => {
  const {
    type, onClick, className,
  } = props;
  return (
    <span onClick={onClick} className={className}>
      {type && <i className={`angle ${type} icon arrowButton`}></i>}
    </span>
  );
};

arrowButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

arrowButton.defaultProps = {
  left: false,
  right: false,
  clicked: () => {},
  className: '',
};

export default arrowButton;
