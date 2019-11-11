import React from 'react';
import { shallow } from 'enzyme';

import ShippingMethod from './ShippingMethod';

describe('<ShippingMethod />', () => {
  let wrapper = shallow(<ShippingMethod />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
