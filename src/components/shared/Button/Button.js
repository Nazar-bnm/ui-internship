import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    customClass, icon, children, onClick
  } = props;

  return (
    <button
      className={`${customClass} button`}
      type="button"
      onClick={onClick}
    >
      {icon && <i className={`${icon} icon`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Button.defaultProps = {
  icon: null,
  customClass: null,
  onClick: () => {},
  children: []
};

export default Button;
