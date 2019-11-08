import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const {
    className, icon, children, onClick
  } = props;

  return (
    <button
      className={`${className} button`}
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
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Button.defaultProps = {
  icon: null,
  className: null,
  onClick: () => {},
  children: []
};

export default Button;
