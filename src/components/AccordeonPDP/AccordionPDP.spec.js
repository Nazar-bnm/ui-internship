import React from 'react';
import { shallow } from 'enzyme';
import AccordionPDP from './AccordionPDP';

describe('<AccordionPDP />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AccordionPDP />);
  });

  it('should match snapshot <AccordionPDP />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
