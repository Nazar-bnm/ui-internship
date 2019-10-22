import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Heading title="Default title" position="center" />);
    expect(wrapper).toMatchSnapshot();
  });
});
