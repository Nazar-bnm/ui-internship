import React from 'react';
import { mount } from 'enzyme';
import Carousel from './Carousel';

describe('<Carousel />', () => {
  let items;
  let wrapper;
  const visibleNumOfSlides = {
    desktop: 3,
    tablet: 3,
    mobile: 3
  };
  
  beforeEach( () => {
    items = [
      <div id={1}><div key={1}>hello1 </div></div>,
      <div id={2}><div key={2}>hello 2</div></div>,
      <div id={3}><div key={3}>hello3 </div></div>,
      <div id={4}><div key={4}>hello 4</div></div>,
      <div id={5}><div key={5}>hello 5</div></div>,
      <div id={6}><div key={6}>hello 6</div></div>,
      <div id={7}><div key={7}>hello 7</div></div>,
    ];
    wrapper = mount(<Carousel visibleNumOfSlides={visibleNumOfSlides}>{items}</Carousel>);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should check `componentWillUnmount()`', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'componentWillUnmount');

    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
  });

  test('should check `onScroll()`', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'onScroll');

    inst.onScroll();
    expect(spy).toHaveBeenCalled();
  });

  test('should check `onResize()`', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'onResize');

    inst.onResize();
    expect(spy).toHaveBeenCalled();
  });

  test('should check `handleClick()`', () => {
    jest.spyOn(Carousel.prototype, 'handleClick');
    wrapper = mount(<Carousel visibleNumOfSlides={visibleNumOfSlides}>{items}</Carousel>);

    const carouselNavs = wrapper.find('.carousel__nav');
    const fromNav = carouselNavs.at(0);
    const toNav = carouselNavs.at(1);

    fromNav.simulate('click');
    toNav.simulate('click');
    expect(Carousel.prototype.handleClick).toHaveBeenCalledTimes(2);
  });
});