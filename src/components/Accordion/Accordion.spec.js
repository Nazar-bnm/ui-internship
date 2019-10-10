import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

xdescribe('<Accordion />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Accordion />
    );
  });
  test('should match snapshot <Accordion />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
