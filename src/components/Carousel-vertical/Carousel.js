import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { scrollTo } from '../../helpers';

import './Carousel.scss';


export const CN = 'carousel-vertical';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carouselViewport = React.createRef();
    this.handleClick = this.handleClick.bind(this, props.type);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.countTheSlideWidth = this.countTheSlideWidth.bind(this);
    this.state = {
      numOfSlidesToScroll: 3,
      allTheWayStart: false,
      allTheWayEnd: false,
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
    this.countTheSlideWidth();
  }

  countTheSlideWidth() {
    const { parentElement } = this.carouselViewport.current;
    const { type } = this.props;
    let { clientHeight: clientLength } = parentElement;

    type === 'vertical' && ({ clientHeight: clientLength } = parentElement);
    const { slidesCount } = this.state;

    this.setState({ lengthOfSlide: clientLength / slidesCount });
  }

  checkIfSlidesAllTheWayOver() {
    const { type } = this.props;
    let {
      scrollTop: howMuchIsScrolled,
      clientHeight: clientLength,
      scrollHeight: scrollLength
    } = this.carouselViewport.current;

    if (type === 'vertical') {
      ({
        scrollTop: howMuchIsScrolled,
        clientHeight: clientLength,
        scrollHeight: scrollLength
      } = this.carouselViewport.current);
    }

    // if scrollLeft == 0
    // hide left button
    const allTHeWayStartValue = howMuchIsScrolled === 0;

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 9 cards - each 120px: 9 * 210all === whole viewPort length
    // hide the rightScrollButton
    const allTheWayEndValue = howMuchIsScrolled + clientLength === scrollLength;
    const { allTheWayStart, allTheWayEnd } = this.state;

    (allTheWayStart !== allTHeWayStartValue
      || allTheWayEnd !== allTheWayEndValue)
      && this.setState({
        allTheWayStart: allTHeWayStartValue,
        allTheWayEnd: allTheWayEndValue
      });
  }

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 900 ? 1 : 2;
    const { numOfSlidesToScroll: numOfSlides } = this.state;

    numOfSlides !== numOfSlidesToScroll
      && this.setState({ numOfSlidesToScroll });
  }

  handleClick(type, e) {
    console.log(this.state, '-type   ', e.currentTarget, '-e');
    const clickedBtn = e.currentTarget.classList.contains(`${CN}__left-nav`)
      ? 'left'
      : 'right';
    const { numOfSlidesToScroll, lengthOfSlide } = this.state;
    const carouselViewport = this.carouselViewport.current;
    const step = numOfSlidesToScroll * lengthOfSlide;
    const newPos = clickedBtn === 'left'
      ? carouselViewport.scrollTop - step
      : carouselViewport.scrollTop + step;
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = numOfSlidesToScroll * timeToMoveOneSlide;

    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: 'scrollTop'
    });
  }

  renderChildren() {
    const { children, items } = this.props;
    const { lengthOfSlide } = this.state;
    const style = { maxHeight: `${lengthOfSlide}px` };
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
    const { allTheWayStart, allTheWayEnd } = this.state;
    const navClasses = cx({ [`${CN}__nav`]: true });
    const leftNavClasses = cx(
      {
        [`${CN}__left-nav`]: true,
        [`${CN}__nav-disabled`]: allTheWayStart
      },
      navClasses
    );
    const rightNavClasses = cx(
      {
        [`${CN}__right-nav`]: true,
        [`${CN}__nav-disabled`]: allTheWayEnd
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
          style={{ flexDirection: this.props.type === 'vertical' && 'column' }}
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
