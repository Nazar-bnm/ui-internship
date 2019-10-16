import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    customClass, icon, children, onClickFunction
  } = props;

  return (
    <button type="submit" className={`${customClass} button`} onClick={onClickFunction}>
      {icon && <i className={`${icon} icon`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
