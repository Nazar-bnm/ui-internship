/* eslint-disable no-console */
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { debounce } from 'lodash';
import { scrollTo } from '../../helpers';

import './Carousel.scss';

export const CN = 'carousel';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carouselViewport = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.resizeTheCarousel = debounce(this.resizeTheCarousel, 500);
    this.countTheSlideLength = this.countTheSlideLength.bind(this);
    this.state = {
      numOfSlidesToScroll: 2,
      allTheWayStart: false,
      allTheWayEnd: false,
      slidesCount: this.getSlidesCount()
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.resizeTheCarousel();
    this.checkNumOfSlidesToScroll();
    this.checkIfSlidesAllTheWayOver();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onScroll() {
    this.checkIfSlidesAllTheWayOver();
  }

  onResize() {
    this.resizeTheCarousel();
    this.checkNumOfSlidesToScroll();
    this.getSlidesCount();
  }

  getSlidesCount = () => {
    const { visibleNumOfSlides: sizeValues } = this.props;
    let count;

    if (window.innerWidth >= 1024) {
      count = sizeValues.desktop;
    } else if (window.innerWidth >= 768) {
      count = sizeValues.tablet;
    } else if (window.innerWidth >= 320) {
      count = sizeValues.mobile;
    }

    return count;
  };

  resizeTheCarousel() {
    this.setState({ slidesCount: this.getSlidesCount() });
    this.countTheSlideLength();
  }

  countTheSlideLength() {
    const { parentElement } = this.carouselViewport.current;
    const { type } = this.props;

    let { clientWidth: scrollLength } = parentElement;
    const { slidesCount } = this.state;
    type === 'vertical' && ({ clientHeight: scrollLength } = parentElement);
    console.log(this.carouselViewport.current.parentElement);


    this.setState({ lengthOfSlide: scrollLength / slidesCount });
  }

  checkIfSlidesAllTheWayOver() {
    const { type } = this.props;
    let {
      scrollLeft: howMuchIsScrolled,
      scrollWidth: scrollLength
    } = this.carouselViewport.current.parentElement;

    let { clientWidth: clientLength } = this.carouselViewport.current.parentElement;

    if (type === 'vertical') {
      ({
        scrollTop: howMuchIsScrolled,
        scrollHeight: scrollLength
      } = this.carouselViewport.current.parentElement);

      ({ clientHeight: clientLength } = this.carouselViewport.current.parentElement);
    }
    // if scrollLeft == 0
    // hide left button
    const allTHeWayStartValue = howMuchIsScrolled === 0;

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 9 cards - each 120px: 9 * 210all === whole viewPort length
    // hide the rightScrollButton
    const allTheWayEndValue = howMuchIsScrolled + clientLength === scrollLength;
    const { allTheWayStart, allTheWayEnd } = this.state;
    console.log(howMuchIsScrolled, scrollLength);
    (allTheWayStart !== allTHeWayStartValue
      || allTheWayEnd !== allTheWayEndValue)
      && this.setState({
        allTheWayStart: allTHeWayStartValue,
        allTheWayEnd: allTheWayEndValue
      });

    console.log(howMuchIsScrolled, 'scrollLeft', 'clientHeight', clientLength);
  }

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 1024 ? 1 : 2;
    const { numOfSlidesToScroll: numOfSlides } = this.state;

    numOfSlides !== numOfSlidesToScroll
      && this.setState({ numOfSlidesToScroll });
  }

  handleClick({ currentTarget }) {
    const clickedBtn = currentTarget.classList.contains(`${CN}__left-nav`)
      ? 'left'
      : 'right';
    const { numOfSlidesToScroll, lengthOfSlide } = this.state;
    const { type } = this.props;
    let { scrollLeft: howMuchIsScrolled } = this.carouselViewport.current.parentElement;
    type === 'vertical' && ({ scrollTop: howMuchIsScrolled } = this.carouselViewport.current.parentElement);
    const step = numOfSlidesToScroll * lengthOfSlide;
    const newPos = clickedBtn === 'left'
      ? howMuchIsScrolled - step
      : howMuchIsScrolled + step;
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = numOfSlidesToScroll * timeToMoveOneSlide;
    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: type === 'vertical' ? 'scrollTop' : 'scrollLeft'
    });
  }

  renderChildren() {
    const { children, type } = this.props;
    const { lengthOfSlide } = this.state;
    let style = { width: `${lengthOfSlide}px` };
    type === 'vertical' && (style = { height: `${lengthOfSlide}px` });
    const listOfChildren = [...children];

    return listOfChildren.map((item) => (
      <div
        key={item.id}
        className={`${CN}__child`}
        style={style}
      >
        {item}
      </div>
    ));
  }

  render() {
    const { allTheWayStart, allTheWayEnd } = this.state;
    const navClasses = cx(`${CN}__nav`);
    const leftNavClasses = cx(
      navClasses,
      `${CN}__left-nav`,
      {
        [`${CN}__nav-disabled`]: allTheWayStart
      }
    );
    const rightNavClasses = cx(
      `${CN}__right-nav`,
      navClasses,
      {
        [`${CN}__nav-disabled`]: allTheWayEnd
      }
    );

    return (
      <div className={`${CN}`}>
        <button
          className={leftNavClasses}
          type="button"
          onClick={this.handleClick}
        >
          <i className={`${CN}__arrow-button chevron left icon`} />
        </button>
        <div style={{ width: '100%', height: '100%' }} onScroll={this.onScroll}>
          <div
            className={`${CN}__viewport`}
            ref={this.carouselViewport}
          >
            {this.renderChildren()}
          </div>
        </div>
        <button
          type="button"
          className={rightNavClasses}
          onClick={this.handleClick}
        >
          <i className={`${CN}__arrow-button chevron right icon`} />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.array.isRequired
};

export default Carousel;
