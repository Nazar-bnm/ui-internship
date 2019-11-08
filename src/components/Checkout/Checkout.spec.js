import React from 'react';
import { shallow } from 'enzyme';

import Checkout from './Checkout';

describe('<Checkout />', () => {
  let wrapper = shallow(<Checkout />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
