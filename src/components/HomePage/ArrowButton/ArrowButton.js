import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const arrowButton = (props) => {
  const {
    left, right, onClick, className,
  } = props;
  const type = left ? faChevronLeft : right && faChevronRight;

  return (
    <button type="button" onClick={onClick} className={className}>
      {type && <FontAwesomeIcon icon={type} />}
    </button>
  );
};

arrowButton.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

arrowButton.defaultProps = {
  left: false,
  right: false,
  clicked: () => {},
  className: '',
};

export default arrowButton;
