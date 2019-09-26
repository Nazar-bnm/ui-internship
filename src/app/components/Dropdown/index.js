import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  return (
    <select>
      {props.options.map((opt, i) => (
        <option
          key={i.toString()}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
};

export default Dropdown;
