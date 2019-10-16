import React, { Component } from 'react';
import cx from 'classnames';

import PropTypes from 'prop-types';
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
    this.state = {
      numOfSlidesToScroll: 3,
      allTheWayLeft: false,
      allTheWayRight: false
    };
  }

  componentDidMount() {
    const { scrollWidth } = this.carouselViewport.current;
    const { children } = this.props;
    const { length } = children;

    this.setState({ widthOfSlide: scrollWidth / length },
      () => {
        this.resizeTheCarousel();
        this.checkNumOfSlidesToScroll();
        this.checkIfSlidesAllTheWayOver();
        window.addEventListener('resize', this.onResize);
      });
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
  }

  resizeTheCarousel() {
    const { widthOfSlide } = this.state;
    let carouselWidth = '0';

    if (window.innerWidth > 1280) {
      carouselWidth = `${widthOfSlide * 5}px`;
    } else if (window.innerWidth > 1024) {
      carouselWidth = `${widthOfSlide * 4}px`;
    } else if (window.innerWidth > 768) {
      carouselWidth = `${widthOfSlide * 3}px`;
    } else {
      carouselWidth = `${widthOfSlide * 2}px`;
    }

    this.carouselViewport.current.parentElement.style.width = carouselWidth;
  }

  checkIfSlidesAllTheWayOver() {
    const { scrollLeft, clientWidth, scrollWidth } = this.carouselViewport.current;
    // if scrollLeft == 0
    // hide left button
    const allTHeWayLeftValue = (scrollLeft === 0);

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 9 cards - each 120px: 9 * 210all === whole viewPort length
    // hide the rightScrollButton
    const allTheWayRightValue = ((scrollLeft + clientWidth) === scrollWidth);
    const { allTheWayLeft, allTheWayRight } = this.state;

    (allTheWayLeft !== allTHeWayLeftValue || allTheWayRight !== allTheWayRightValue)
      && this.setState({
        allTheWayLeft: allTHeWayLeftValue,
        allTheWayRight: allTheWayRightValue
      });
  }

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 900 ? 2 : 4;
    const { numOfSlidesToScroll: numOfSlides } = this.state;
    numOfSlides !== numOfSlidesToScroll
    && this.setState({ numOfSlidesToScroll });
  }

  handleClick(e) {
    const clickedBtn = (e.currentTarget.classList.contains(`${CN}__left-nav`)) ? 'left' : 'right';
    const { numOfSlidesToScroll, widthOfSlide } = this.state;
    const carouselViewport = this.carouselViewport.current;
    const step = numOfSlidesToScroll * widthOfSlide;
    const newPos = clickedBtn === 'left'
      ? (carouselViewport.scrollLeft - (step))
      : (carouselViewport.scrollLeft + (step));
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = (numOfSlidesToScroll * timeToMoveOneSlide);

    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: 'scrollLeft'
    });
  }

  render() {
    const { children } = this.props;
    const { allTheWayLeft, allTheWayRight } = this.state;
    const navClasses = cx({ [`${CN}__nav`]: true });
    const leftNavClasses = cx({
      [`${CN}__left-nav`]: true,
      [`${CN}__nav-disabled`]: allTheWayLeft
    }, navClasses);
    const rightNavClasses = cx({
      [`${CN}__right-nav`]: true,
      [`${CN}__nav-disabled`]: allTheWayRight
    }, navClasses);

    return (
      <div className={`${CN} content`}>
        <button
          type="button"
          onClick={this.handleClick}
          className={leftNavClasses}
        >
          <i className={`${CN}__arrow-button chevron left icon`} />
        </button>
        <div
          className={`${CN}__viewport`}
          ref={this.carouselViewport}
          onScroll={this.onScroll}
        >
          { children }
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
