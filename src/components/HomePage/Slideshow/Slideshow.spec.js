import React from 'react';
import { shallow } from 'enzyme';

import Slideshow from './Slideshow';
import Slide from '../Slide';
import { slideshowData } from './SlideshowDate';
import { ANIMATION_NAMES } from '@/constants/SlideshowConst';

describe('<Slideshow />', () => {
  const CN = 'slideshow-slides';
  const { CAROUSEL } = ANIMATION_NAMES;
  const slideDataLength = slideshowData.length;

  const slidesData = slideshowData.map((el) => {
    return {
      id: el.id,
      img: el.img,
      component: (
        <Slide
          title={el.title}
          description={el.description}
          buttonName={el.buttonName}
        />
      ),
    };
  });

  let wrapper;
  let index;

  beforeEach(() => {
    wrapper = shallow(<Slideshow animation={CAROUSEL} slideData={slidesData} />);
  });

  it('should render component <Slideshow />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render pagination items that is equal to slideData length', () => {
    expect(wrapper.find('.slideshow-pagination__item')).toHaveLength(slideDataLength);
  });

  it('expect index of the state to be index of clicked pagination item ', () => {
    index = 0;
    wrapper.find('.slideshow-pagination__item').at(index).simulate('click');
    expect(wrapper.state().index).toBe(index);
  });

  it('expect the clicked pagination item has active class but not the rest', () => {
    wrapper.find('.slideshow-pagination__item').forEach((element) => {
      element.simulate('click');
    });

    wrapper.find('.slideshow-pagination__item').forEach((element, index) => {
      if (index != slideDataLength - 1) {
        expect(element.hasClass('slideshow-pagination__item--active')).toBe(false);
      } else {
        expect(element.hasClass('slideshow-pagination__item--active')).toBe(true);
      }
    });
  });

  it('should pause autoPlay when mouse enter Slideshow component', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state().autoPlay).toBe(false);
  });

  it('should start autoPlay when mouse left Slideshow component and none of buttons was clicked', () => {
    wrapper.simulate('mouseenter');
    wrapper.simulate('mouseleave');
    expect(wrapper.state().autoPlay).toBe(true);
    wrapper.simulate('mouseenter');
    wrapper.find('.slideshow__arrow-button').first().simulate('click');
    wrapper.simulate('mouseleave');
    expect(wrapper.state().autoPlay).toBe(false);
  });

  it('should increase index of state by 1 when click right arrow,'+
  'but after slideDataLength clicks and when transition ends index should be again equal to 0', () => {
    wrapper.find('[type="right"]').simulate('click');
    wrapper.find(`.${CN}`).simulate('transitionend');
    expect(wrapper.state().index).toBe(1);
    wrapper.find('[type="right"]').simulate('click');
    expect(wrapper.state().index).toBe(2);
    wrapper.find('[type="right"]').simulate('click');
    wrapper.find('[type="right"]').simulate('click');
    wrapper.find('[type="right"]').simulate('click');
    wrapper.find(`.${CN}`).simulate('transitionend');
    expect(wrapper.state().index).toBe(0);
  });

  it('should decrease index of state by 1 when click right arrow'+
  'but after first click and when transition ends index should be equal to slideDataLength - 1',
  () => {
    wrapper.find('[type="left"]').simulate('click');
    expect(wrapper.state().index).toBe(-1);
    wrapper.find(`.${CN}`).simulate('transitionend');
    expect(wrapper.state().index).toBe(slideDataLength - 1);
    wrapper.find('[type="left"]').simulate('click');
    expect(wrapper.state().index).toBe(slideDataLength - 2);
  });

  it('should pause autoPlay when mouse enter Slideshow component', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state().autoPlay).toBe(false);
  });

  it('should set transform when index changes and remove when animation ends', () => {
    index = 3;
    wrapper = shallow(<Slideshow animation="zoom-in" slideData={slideshowData} />);
    wrapper.find('.slideshow-pagination__item').at(index).simulate('click');
    expect(wrapper.state().isTransform).toBe(true);
    const prevIndex = wrapper.state().prevIndex;
    wrapper.find('[animation="zoom-in"]').at(prevIndex).simulate('animationend');
    expect(wrapper.state().isTransform).toBe(false);
    index = 2;
    wrapper.find('.slideshow-pagination__item').at(index).simulate('click');
    expect(wrapper.state().isTransform).toBe(true);
  });
});
