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
    this.countTheSlideWidth = this.countTheSlideWidth.bind(this);
    this.state = {
      numOfSlidesToScroll: 3,
      allTheWayLeft: false,
      allTheWayRight: false,
      slidesCount: this.getSlidesCount()
    };
  }

  componentDidMount() {
    this.resizeTheCarousel();
    window.addEventListener('resize', this.onResize);
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
    const sizeValues = {
      desktop: 3,
      tablet: 2,
      mobile: 1
    };

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

    (allTheWayLeft !== allTHeWayLeftValue
      || allTheWayRight !== allTheWayRightValue)
      && this.setState({
        allTheWayLeft: allTHeWayLeftValue,
        allTheWayRight: allTheWayRightValue
      });
  }

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 900 ? 1 : 2;
    const { numOfSlidesToScroll: numOfSlides } = this.state;

    numOfSlides !== numOfSlidesToScroll
      && this.setState({ numOfSlidesToScroll });
  }

  handleClick(e) {
    const clickedBtn = e.currentTarget.classList.contains(`${CN}__left-nav`)
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
    const { children, items } = this.props;
    const { widthOfSlide } = this.state;
    const style = { maxWidth: `${widthOfSlide}px` };
    const listOfChildren = [...children];

    return listOfChildren.map((item, i) => (
      <div
        key={items[i].id}
        className={`${CN}__child`}
        style={style}
      >
        {item}
      </div>
    ));
  }


  render() {
    const { allTheWayLeft, allTheWayRight } = this.state;
    const navClasses = cx({ [`${CN}__nav`]: true });
    const leftNavClasses = cx(
      {
        [`${CN}__left-nav`]: true,
        [`${CN}__nav-disabled`]: allTheWayLeft
      },
      navClasses
    );
    const rightNavClasses = cx(
      {
        [`${CN}__right-nav`]: true,
        [`${CN}__nav-disabled`]: allTheWayRight
      },
      navClasses
    );

    return (
      <div className={`${CN} content`}>
        <button
          className={leftNavClasses}
          type="button"
          onClick={this.handleClick}
        >
          <i className={`${CN}__arrow-button chevron left icon`} />
        </button>
        <div
          className={`${CN}__viewport`}
          ref={this.carouselViewport}
          onScroll={this.onScroll}
        >
          {this.renderChildren()}
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
