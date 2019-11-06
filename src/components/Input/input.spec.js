import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Input />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
