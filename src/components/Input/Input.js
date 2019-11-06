import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const CN = 'input';

const Input = ({ icon, customClass }) => (
  <div className={cx(CN)}>
    {icon && <i className={`${icon} icon`} />}
    <input className={customClass} type="text" placeholder="SEARCH" />
  </div>
);

Input.propTypes = {
  icon: PropTypes.string,
  customClass: PropTypes.string
};

Input.defaultProps = {
  icon: '',
  customClass: ''
};

export default Input;
