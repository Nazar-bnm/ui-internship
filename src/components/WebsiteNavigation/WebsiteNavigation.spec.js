import React from 'react';
import { shallow } from 'enzyme';

import WebsiteNavigation from './WebsiteNavigation';

describe('<WebsiteNavigation />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<WebsiteNavigation />);
    expect(wrapper).toMatchSnapshot();
  });
});