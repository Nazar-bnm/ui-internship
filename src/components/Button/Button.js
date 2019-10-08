import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ customClass, icon, children, onClickFunction }) =>
  <button type="submit" className={`${customClass} button`} onClick = {onClickFunction}>
    {icon && <i className={`${icon} icon`} />}
    {children}
  </button>;

Button.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string,
  onClickFunction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
