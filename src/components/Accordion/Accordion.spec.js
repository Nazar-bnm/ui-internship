import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import { accordionItemsData } from '../../config/accordion';

describe('<Accordion />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Accordion data={accordionItemsData} heightItem="100px" />);
  });

  it('should match snapshot <Accordion />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change hide state property when you click on Accordion item', () => {
    wrapper
      .find('[hide]')
      .first()
      .simulate('click');
    expect(wrapper.state().hide[0]).toBe(false);
    wrapper
      .find('[hide]')
      .first()
      .simulate('click');
    expect(wrapper.state().hide[0]).toBe(true);
  });

  it('should the rest Accordion Item have prop hide equal to "true" when click on one accordion item ', () => {
    () => {
      wrapper
        .find('[hide]')
        .first()
        .simulate('click');
      expect(wrapper.find('[hide]').first.prop('hide')).toBe(false);
      expect(
        wrapper
          .find('[hide]')
          .at(1)
          .prop('hide'),
      ).toBe(true);
      expect(
        wrapper
          .find('[hide]')
          .at(2)
          .prop('hide'),
      ).toBe(true);
    };
  });

  it('should hide props to be equal false for all AccordionItem', () => {
    wrapper = shallow(<Accordion data={accordionItemsData} open showAll/>);
    expect(
      wrapper
        .find('[hide]')
        .at(0)
        .prop('hide'),
    ).toBe(false);
    expect(
      wrapper
        .find('[hide]')
        .at(1)
        .prop('hide'),
    ).toBe(false);
  });
});
