import React from 'react';
import Dropdown from '../../../Dropdown';
import PropTypes from 'prop-types';

const options = {
  currency: [
    { value: 'USD', label: 'USD' },
    { value: 'EURO', label: 'EURO' },
    { value: 'UAH', label: 'UAH' },
  ],
  language: [
    { value: 'EN', label: 'English' },
    { value: 'RU', label: 'Russian' },
    { value: 'UA', label: 'Ukrainian' },
  ],
  company: [
    { value: 'Co', label: 'Company' },
    { value: 'Corp', label: 'Corporation' },
    { value: 'Option3', label: 'Option 3' },
  ],
};

const ContentOptions = (props) => {
  return (
    <div className={`container ${props.grid}`}>
      <Dropdown options={options.company}/>
      <Dropdown options={options.currency}/>
      <Dropdown options={options.language}/>
    </div>
  );
};

ContentOptions.propTypes = {
  grid: PropTypes.string,
};

export default ContentOptions;
