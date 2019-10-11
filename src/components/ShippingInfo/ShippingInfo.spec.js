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

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
