import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ customClass, icon, children }) => {
  return (
    <button type="submit" className={`${customClass} button`}>
      {icon && <i className={icon + ' icon'} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
