import React from 'react';
import { shallow } from 'enzyme';
import ContactDetails from './ContactDetails';

describe('<ContactDetails />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactDetails />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
