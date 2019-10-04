import React from 'react';
import Dropdown from '../../../Dropdown';
import { options } from '../../../../config/headerMockups';
import PropTypes from 'prop-types';

const ContentOptions = (props) => {
  return (
    <div className={'container dropdowns'}>
      <Dropdown options={options.company} className="dropdown"/>
      <Dropdown options={options.currency} className="dropdown"/>
      <Dropdown options={options.language} className="dropdown"/>
    </div>
  );
};

ContentOptions.propTypes = {
  grid: PropTypes.string,
};

export default ContentOptions;
