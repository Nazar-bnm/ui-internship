import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageNavigation = (props) => {
  return (
    <ul className={'list container'}>
      {props.options.map(({ value, label, link }, i) => (
        <li key={i.toString()}
          value={value}
          className={'list__item'}
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
};

export default PageNavigation;
