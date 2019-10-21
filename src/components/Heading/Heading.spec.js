import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
  test('should match snapshot', () => {
    let wrapper = shallow(
      <Heading />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
