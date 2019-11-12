import React from 'react';
import { shallow } from 'enzyme';

import BillingInfo from './BillingInfo';

describe('<BillingInfo />', () => {
  let wrapper = shallow(<BillingInfo />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
