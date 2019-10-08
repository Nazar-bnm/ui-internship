import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

describe('<Slide />', () => {
  const CustomComponent = () => <div>Component</div>;
  it('should make a snapshot of Slide component', () => {
    const wrapper = shallow(
      <Slide bgImage="some image url" animation="some animation name" onAnimationEnd={() => {}}>
        <CustomComponent />
      </Slide>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke animation end handler when animation ends', () => {
    const mockedAnimationEndHandler = jest.fn(() => {});
    const wrapper = shallow(<Slide onAnimationEnd={mockedAnimationEndHandler} />);
    wrapper.find('.slide-wrapper').first().simulate('animationend');
    expect(mockedAnimationEndHandler.mock.calls.length).toBe(1);
  });
});
