import React from 'react';
import { shallow } from 'enzyme';
import ContactDetails from './ContactDetails';

describe('<ContactDetails />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ContactDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
