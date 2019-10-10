import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      options: [{ value: 'USD', label: 'USD' },
        { value: 'EURO', label: 'EURO' },
        { value: 'UAH', label: 'UAH' }],
    };

    wrapper = shallow(
      <Dropdown {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
