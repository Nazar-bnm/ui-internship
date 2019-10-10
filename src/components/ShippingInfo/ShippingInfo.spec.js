import React from 'react';
import { shallow } from 'enzyme';
import ShippingInfo from './ShippingInfo';

describe('<ShippingInfo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ShippingInfo />
    );
  });

  test('renders', () => {
    wrapper = shallow(<ShippingInfo />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
