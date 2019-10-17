import React from 'react';
import { shallow } from 'enzyme';

import ArrowButton from './ArrowButton';
import { ARROW_BUTTON_TYPES } from '../../../../constants/SlideshowConst';

const { LEFT } = ARROW_BUTTON_TYPES;

describe('<ArrowButton />', () => {
  it('should make a snapshot of ArrowButton component', () => {
    const wrapper = shallow(<ArrowButton onClick={() => {} } type={LEFT} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke click handler on click', () => {
    const mockedClickHandler = jest.fn(() => {});
    const wrapper = shallow(<ArrowButton onClick={mockedClickHandler} type={LEFT} />);

    wrapper.find('span').first().simulate('click');
    expect(mockedClickHandler.mock.calls.length).toBe(1);
  });
});
