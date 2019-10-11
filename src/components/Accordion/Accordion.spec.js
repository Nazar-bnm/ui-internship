/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import { accordionItemsData } from './AccordionData';

describe('<Accordion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Accordion data={accordionItemsData}/>);
  });

  it('should match snapshot <Accordion />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change hide state property to "false" when you click on Accordion item for the first time, for the second time to true',
    () => {
      wrapper.find('[hide]').first().simulate('click');
      expect(wrapper.state().hide).toBe(false);
      wrapper.find('[hide]').first().simulate('click');
      expect(wrapper.state().hide).toBe(true);
    });

  it('should the rest Accordion Item have prop hide equal to "true" when click on one accordion item ', () => {
    () => {
      wrapper.find('[hide]').first().simulate('click');
      expect(wrapper.find('[hide]').first.prop('hide')).toBe(false);
      expect(wrapper.find('[hide]').at(1).prop('hide')).toBe(true);
      expect(wrapper.find('[hide]').at(2).prop('hide')).toBe(true);
    };
  });
});
