import React from 'react';
import PropTypes from 'prop-types';

const PageNavigation = (props) => {
  return (
    <ul className={props.class}>
      {props.options.map((option, i) => (
        <li key={i.toString()}
          value={option.value}
        >
          {option.label}
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
