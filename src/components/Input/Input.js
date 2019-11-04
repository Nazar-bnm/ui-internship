import React from 'react';
import PropTypes from 'prop-types';

export const CN = 'input';

const Input = ({ icon, className, placeholder }) => (
  <div className={CN}>
    {icon && <i className={`${icon} icon`} />}
    <input className={className} type="text" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  icon: '',
  className: '',
  placeholder: ''
};

export default Input;
