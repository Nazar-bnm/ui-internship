import React from 'react';
import { shallow } from 'enzyme';

import LoginRegister from './LoginRegister';

describe('<LoginRegister />', () => {
  let wrapper = shallow(<LoginRegister />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
