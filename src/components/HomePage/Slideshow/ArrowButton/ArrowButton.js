import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { ARROW_BUTTON_TYPES } from '../../../../constants/SlideshowConst';

import './ArrowButton.scss';

const CN = 'arrow-button';
const { LEFT, RIGHT } = ARROW_BUTTON_TYPES;

const arrowButton = ({ type, onClick, className }) => (
  <span onClick={onClick} className={className}>
    <i className={cx('angle', [type], 'icon', `${CN}__icon`)} />
  </span>
);

arrowButton.propTypes = {
  type: PropTypes.oneOf([LEFT, RIGHT]),
  onClick: PropTypes.func,
  className: PropTypes.string
};

arrowButton.defaultProps = {
  type: '',
  onClick: () => {},
  className: ''
};

export default arrowButton;
