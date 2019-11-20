import React from 'react';
import { shallow } from 'enzyme';

import BillingInfo from './BillingInfo';

describe('<BillingInfo />', () => {
  let wrapper = shallow(<BillingInfo />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change region state when select a region', () => {
    const event = 'hello';
    wrapper = shallow(<BillingInfo />);
    wrapper.find('RegionDropdown').simulate('change', event);
    expect(wrapper.state().region).toBe(event);
  })

  test('should change country state when select a country', () => {
    const event = 'hello';
    wrapper = shallow(<BillingInfo />);
    wrapper.find('CountryDropdown').simulate('change', event);
    expect(wrapper.state().country).toBe(event);
  })
});
