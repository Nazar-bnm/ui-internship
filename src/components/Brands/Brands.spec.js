import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brands';

describe('<Brands />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Brand />
    );
  });

  test('renders', () => {
    wrapper = shallow(<Brand />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
