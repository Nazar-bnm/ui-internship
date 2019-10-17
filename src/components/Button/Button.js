import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = (props) => {
  const {
    className, icon, children, onClickFunction
  } = props;

  const CN = 'button';

  return (
    <button
      className={`${cx(CN, className)} `}
      type="button"
      onClick={onClickFunction}
    >
      {icon && <i className={`${icon} icon`} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  onClickFunction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Button.defaultProps = {
  icon: null,
  className: '',
  children: []
};

export default Button;
