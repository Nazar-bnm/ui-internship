import React from 'react';
import { shallow } from 'enzyme';

import Accordion from './Accordion';
import { accordionItemsData } from '../AccordionPDP/dataItems';

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
    expect(wrapper.state().data[0].isHidden).toBeFalsy();
    accordionItems.first().simulate('click');
    expect(wrapper.state().data[0].isHidden).toBeTruthy();
  });

  it('should the rest Accordion Item have prop hide equal to "true"', () => {
    accordionItems.first().simulate('click');
    wrapper.find('[hide]').forEach((accordionItem, index) => {
      if(index === 0) {
        expect(accordionItem.prop('hide')).toBeFalsy();
      } else {
        expect(accordionItem.prop('hide')).toBeTruthy();
      }
    })
  });

  it('should hide props to be equal false for all AccordionItem', () => {
    wrapper = shallow(<Accordion data={accordionItemsData} open showAll />);
    accordionItems = wrapper.find('[hide]');
    accordionItems.forEach(accordionItem => {
      expect(accordionItem.prop('hide')).toBeFalsy();
    })
  });
});
