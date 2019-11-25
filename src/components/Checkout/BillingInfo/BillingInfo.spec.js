import React from 'react';
import { shallow } from 'enzyme';

import BillingInfo from './BillingInfo';

describe('<BillingInfo />', () => {
  let wrapper = shallow(<BillingInfo />);
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change region state when select a region', () => {
    const mockEvent = 'Ukraine';
    wrapper = shallow(<BillingInfo />);
    wrapper.find('RegionDropdown').simulate('change', mockEvent);
    expect(wrapper.state().region).toBe(mockEvent);
  })

  test('should change country state when select a country', () => {
    const mockEvent = 'Lviv';
    wrapper = shallow(<BillingInfo />);
    wrapper.find('CountryDropdown').simulate('change', mockEvent);
    expect(wrapper.state().country).toBe(mockEvent);
  })
});
