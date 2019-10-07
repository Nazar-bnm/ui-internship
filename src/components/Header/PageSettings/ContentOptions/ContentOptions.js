import React from 'react';
import Dropdown from '../../../Dropdown';
import { options } from '../../../../config/headerMockups';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const CN = 'dropdowns';

const ContentOptions = (props) => {
  return (
    <div className={cx(CN, 'container')}>
      <Dropdown options={options.company} />
      <Dropdown options={options.currency} />
      <Dropdown options={options.language} />
    </div>
  );
};

ContentOptions.propTypes = {
  grid: PropTypes.string,
  className: PropTypes.string,
};

export default ContentOptions;
