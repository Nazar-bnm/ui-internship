import React from 'react';
import { shallow } from 'enzyme';
import ArrowButton from './ArrowButton';

describe('<ArrowButton />', () => {
  it('should make a snapshot of ArrowButton component', () => {
    const wrapper = shallow(<ArrowButton onClick={() => {} } type="left" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke click handler on click', () => {
    const mockedClickHandler = jest.fn(() => {});
    const wrapper = shallow(<ArrowButton onClick={mockedClickHandler} type="left" />);
    wrapper.find('span').first().simulate('click');
    expect(mockedClickHandler.mock.calls.length).toBe(1);
  });
});
