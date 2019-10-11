import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ARROW_BUTTON_TYPES } from '../../../../constants/SlideshowConst';
import './ArrowButton.scss';

const { LEFT, RIGHT } = ARROW_BUTTON_TYPES;

const arrowButton = ({ type, onClick, className }) => (
  <span onClick={onClick} className={className}>
    <i className={cx('angle', [type], 'icon', 'arrow-button__icon')} />
  </span>
);

arrowButton.propTypes = {
  type: PropTypes.oneOf([LEFT, RIGHT]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

arrowButton.defaultProps = {
  type: '',
  onClick: () => {},
  className: '',
};

export default arrowButton;
