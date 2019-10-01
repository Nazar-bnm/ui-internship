import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="button">
      {props.icon && <i className={props.icon + ' icon'}></i>}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
