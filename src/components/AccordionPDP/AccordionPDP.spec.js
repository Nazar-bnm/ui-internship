import React from 'react';
import { shallow } from 'enzyme';

import AccordionPDP from './AccordionPDP';

describe('<AccordionPDP />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AccordionPDP />);

    expect(wrapper).toMatchSnapshot();
  });
});
