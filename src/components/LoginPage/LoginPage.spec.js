import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
