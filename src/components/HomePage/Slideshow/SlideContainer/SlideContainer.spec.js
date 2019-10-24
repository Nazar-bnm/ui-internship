import React from 'react';
import { shallow } from 'enzyme';

import SlideContainer from './SlideContainer';

describe('<SlideContainer />', () => {
  const CustomComponent = () => <div>Component</div>;

  it('should make a snapshot of SlideContainer component', () => {
    const wrapper = shallow(
      <SlideContainer
        bgImage="some image url"
        animation="some animation name"
        onAnimationEnd={() => {}}
      >
        <CustomComponent />
      </SlideContainer>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke animation end handler when animation ends', () => {
    const mockedAnimationEndHandler = jest.fn(() => {});
    const wrapper = shallow(
      <SlideContainer onAnimationEnd={mockedAnimationEndHandler}>
        <CustomComponent />
      </SlideContainer>,
    );

    wrapper
      .find('.slide__wrapper')
      .first()
      .simulate('animationend');
    expect(mockedAnimationEndHandler.mock.calls.length).toBe(1);
  });
});
