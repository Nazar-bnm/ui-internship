import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const CN = 'list';

const PageNavigation = (props) => {
  return (
    <ul className={cx(CN, 'container')}>
      {props.options.map(({ value, label, link }, i) => (
        <li key={i.toString()}
          value={value}
          className={`${CN}__item`}
        >
          <Link to={link}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

PageNavigation.propTypes = {
  class: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
};

export default PageNavigation;
