import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { scrollTo } from '@/helpers';

import './Carousel.scss';

const sizeValues = {
  desktop: 3,
  tablet: 2,
  mobile: 1
};

export const CN = 'carousel';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carouselViewport = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.resizeTheCarousel = debounce(this.resizeTheCarousel, 500);
    this.countTheSlideWidth = this.countTheSlideWidth.bind(this);
    this.state = {
      numOfSlidesToScroll: 2,
      allTheWayLeft: false,
      allTheWayRight: false,
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
    let count;

    if (window.innerWidth >= 1024) {
      count = sizeValues.desktop;
    } else if (window.innerWidth > 768) {
      count = sizeValues.tablet;
    } else if (window.innerWidth >= 320) {
      count = sizeValues.mobile;
    }

    return count;
  };

  resizeTheCarousel() {
    this.setState({ slidesCount: this.getSlidesCount() });
    this.countTheSlideWidth();
  }

  countTheSlideWidth() {
    const { scrollWidth } = this.carouselViewport.current.parentElement;
    const { slidesCount } = this.state;

    this.setState({ widthOfSlide: scrollWidth / slidesCount });
  }

  checkIfSlidesAllTheWayOver() {
    const {
      scrollLeft,
      clientWidth,
      scrollWidth
    } = this.carouselViewport.current;
    // if scrollLeft == 0
    // hide left button
    const allTHeWayLeftValue = scrollLeft === 0;

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 9 cards - each 120px: 9 * 210all === whole viewPort length
    // hide the rightScrollButton
    const allTheWayRightValue = scrollLeft + clientWidth === scrollWidth;
    const { allTheWayLeft, allTheWayRight } = this.state;

    if (allTheWayLeft !== allTHeWayLeftValue) {
      this.setState({
        allTheWayLeft: allTHeWayLeftValue
      });
    }

    if (allTheWayRight !== allTheWayRightValue) {
      this.setState({
        allTheWayRight: allTheWayRightValue
      });
    }
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
    const { numOfSlidesToScroll, widthOfSlide } = this.state;
    const carouselViewport = this.carouselViewport.current;
    const step = numOfSlidesToScroll * widthOfSlide;
    const newPos = clickedBtn === 'left'
      ? carouselViewport.scrollLeft - step
      : carouselViewport.scrollLeft + step;
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = numOfSlidesToScroll * timeToMoveOneSlide;

    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: 'scrollLeft'
    });
  }

  renderChildren() {
    const { children } = this.props;
    const { widthOfSlide } = this.state;
    const style = { maxWidth: widthOfSlide };

    return children.map((item) => (
      <div
        key={item.key}
        className={`${CN}__child`}
        style={style}
      >
        {item}
      </div>
    ));
  }

  render() {
    const { allTheWayLeft, allTheWayRight } = this.state;
    const navClasses = cx(`${CN}__nav`);
    const leftNavClasses = cx(
      navClasses,
      `${CN}__left-nav`,
      {
        [`${CN}__nav-disabled`]: allTheWayLeft
      }
    );
    const rightNavClasses = cx(
      `${CN}__right-nav`,
      navClasses,
      {
        [`${CN}__nav-disabled`]: allTheWayRight
      }
    );

    return (
      <div className={`${CN} content`}>
        <div
          className={`${CN}__viewport`}
          ref={this.carouselViewport}
          onScroll={this.onScroll}
        >
          {this.renderChildren()}
        </div>
        <button
          className={leftNavClasses}
          type="button"
          onClick={this.handleClick}
        >
          <i className={`${CN}__arrow-button chevron left icon`} />
        </button>
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
