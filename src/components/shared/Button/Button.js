import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    customClass, icon, children, onClickFunction
  } = props;

  return (
    <button
      className={`${customClass} button`}
      type="button"
      onClick={onClickFunction}
    >
      {icon && <i className={`${icon} icon`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string,
  onClickFunction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Button.defaultProps = {
  icon: null,
  customClass: null,
  onClickFunction: null,
  children: []
};

export default Button;
