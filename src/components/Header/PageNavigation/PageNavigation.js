import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
export const CN = 'list';

const PageNavigation = (props) => {
  const { options } = props;
  return (
    <ul className={cx(CN, 'container')}>
      {options.map(({ value, label, link }, i) => (
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
