import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';


import Slide from './Slide';
import scrollTo from './scrollToAnimate';
import cx from 'classnames';

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
      allTheWayRight: false,
      widthOfSlide: 210,
    };
  }

  componentDidMount() {
    this.resizeTheCarousel();
    this.checkNumOfSlidesToScroll();
    this.checkIfSlidesAllTheWayOver();
    window.addEventListener('resize', this.onResize);
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
    let carouselWidth = '0';

    if (window.innerWidth > 1280) {
      carouselWidth = '1050px';
    } else if (window.innerWidth > 1024) {
      carouselWidth = '840px';
    } else if (window.innerWidth > 768) {
      carouselWidth = '630px';
    } else {
      carouselWidth = '420px';
    }

    this.carouselViewport.current.parentElement.style.width = carouselWidth;
  }

  checkIfSlidesAllTheWayOver() {
    // if scrollLeft == 0
    // hide left button
    const allTHeWayLeftValue = (this.carouselViewport.current.scrollLeft === 0);

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 9 cards - each 120px: 9 * 210all === whole viewPort length
    // hide the rightScrollButton
    const { scrollLeft, clientWidth, scrollWidth } = this.carouselViewport.current;
    const allTheWayRightValue = ((scrollLeft + clientWidth) === scrollWidth);
    const { allTheWayLeft, allTheWayRight } = this.state;

    (allTheWayLeft !== allTHeWayLeftValue || allTheWayRight !== allTheWayRightValue) &&
      this.setState({
        allTheWayLeft: allTHeWayLeftValue,
        allTheWayRight: allTheWayRightValue,
      });
  }

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 900 ? 2 : 4;
    this.state.numOfSlidesToScroll !== numOfSlidesToScroll &&
    this.setState({ numOfSlidesToScroll });
  }

  handleClick(e) {
    const clickedBtn = (e.currentTarget.classList.contains(`${CN}__left-nav`)) ? 'left' :'right';
    const carouselViewport = this.carouselViewport.current;
    const numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    const widthOfSlide = this.state.widthOfSlide;
    const newPos = clickedBtn === 'left' ?
      (carouselViewport.scrollLeft - (numOfSlidesToScroll * widthOfSlide)) :
      (carouselViewport.scrollLeft + (numOfSlidesToScroll * widthOfSlide));
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = (numOfSlidesToScroll * timeToMoveOneSlide);

    (clickedBtn === 'right') && this.setState({ disabled: false });

    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: 'scrollLeft',
    });
  }

  renderSlides() {
    const { items } = this.props;

    return (items.map((state) =>
      <Slide
        image = {state.images[0].url[0]}
        name = {state.productName}
        category = {state.category}
        key = {state.productName}
      />
    ));
  }

  render() {
    const { allTheWayLeft, allTheWayRight } = this.state;
    const navClasses = cx({
      [`${CN}__nav`]: true,
    });
    const leftNavClasses = cx({
      [`${CN}__left-nav`]: true,
      [`${CN}__nav-disabled`]: allTheWayLeft,
    }, navClasses);
    const rightNavClasses = cx({
      [`${CN}__right-nav`]: true,
      [`${CN}__nav-disabled`]: allTheWayRight,
    }, navClasses);

    return (
      <div className = {`${CN} content`}>
        <button
          onClick={this.handleClick}
          className={ leftNavClasses }
        >
          <i className={`${CN}__arrow-button chevron left icon`} />
        </button>
        <div
          className={`${CN}__viewport`}
          ref={this.carouselViewport}
          onScroll = { this.onScroll }
        >
          {this.renderSlides()}
        </div>
        <button
          className={ rightNavClasses }
          onClick={this.handleClick}
        >
          <i className = {`${CN}__arrow-button chevron right icon`} />
        </button>
      </div>
    );
  }
}


Carousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default Carousel;
