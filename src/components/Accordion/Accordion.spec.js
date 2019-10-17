import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import { accordionItemsData } from '../AccordionPDP/DataItemProps';

describe('<Accordion />', () => {
  let wrapper;
  let accordionItems;

  beforeEach(() => {
    wrapper = shallow(
      <Accordion data={accordionItemsData} heightItem="100px" />,
    );
    accordionItems = wrapper.find('[hide]');
  });

  it('should match snapshot <Accordion />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change hide state property when you click on Accordion item', () => {
    accordionItems.first().simulate('click');
    expect(wrapper.state().hide[0]).toBe(false);
    accordionItems.first().simulate('click');
    expect(wrapper.state().hide[0]).toBe(true);
  });

  it('should the rest Accordion Item have prop hide equal to "true"', () => {
    accordionItems.first().simulate('click');
    expect(wrapper.find('[hide]').first().prop('hide')).toBe(false);
    expect(wrapper.find('[hide]').at(1).prop('hide')).toBe(true);
    expect(wrapper.find('[hide]').at(2).prop('hide')).toBe(true);
  });

  it('should hide props to be equal false for all AccordionItem', () => {
    wrapper = shallow(<Accordion data={accordionItemsData} open showAll />);
    accordionItems = wrapper.find('[hide]');
    expect(accordionItems.at(0).prop('hide')).toBe(false);
    expect(accordionItems.at(1).prop('hide')).toBe(false);
  });
});
