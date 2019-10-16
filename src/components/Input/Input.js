import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const CN = 'input';

const Input = (props) => {
  const { icon, customClass } = props;

  return (
    <div className={cx(CN)}>
      {icon && <i className={`${icon} + icon`} />}
      <input type="text" placeholder="SEARCH" className={customClass} />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired
};

export default Input;
