import React from 'react';
import { shallow } from 'enzyme';

import ShippingInfo from './ShippingInfo';

describe('<ShippingInfo />', () => {
  let wrapper = shallow(<ShippingInfo />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
