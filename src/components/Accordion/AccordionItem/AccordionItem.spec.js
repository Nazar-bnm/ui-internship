import React from 'react';
import { shallow } from 'enzyme';
import AccordionItem from './AccordionItem';

describe('<AccordionItem />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      title: 'hello',
      description: 'Architecto, earum temporibus quidem ex eaque unde harum sit, deleniti tempore',
      hide: true,
    };

    wrapper = shallow(<AccordionItem {...props} />);
  });

  it('should match snapshot <AccordionItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke function mockClickHandler when event on click occurs', () => {
    const mockClickHandler = jest.fn();

    wrapper = shallow(<AccordionItem {...props} onClick={mockClickHandler}/>);
    wrapper.find('.accordion-item-header').first().simulate('click');

    expect(mockClickHandler.mock.calls.length).toBe(1);
  });
});
