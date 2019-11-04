import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const CN = 'list';

const PageNavigation = (props) => {
  const { options } = props;

  return (
    <ul className={cx(CN, 'container')}>
      {options.map(({ value, label, link }) => (
        <li
          key={value}
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
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string
  })).isRequired
};

export default PageNavigation;
