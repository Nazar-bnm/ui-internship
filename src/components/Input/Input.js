import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
    <div className="input-wrapper">
      {props.icon && <i className={props.icon + ' icon'}></i>}
      <input type="text" placeholder="SEARCH" className={props.customClass + ' input'} />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Input;
