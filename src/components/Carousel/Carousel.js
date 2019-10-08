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

  onScroll() {
    this.checkIfSlidesAllTheWayOver();
  }

  onResize() {
    this.resizeTheCarousel();
    this.checkNumOfSlidesToScroll();
  }

  resizeTheCarousel() {
    if (window.innerWidth > 1280) {
      this.carouselViewport.current.parentElement.style.width = '1050px';
    } else if (window.innerWidth > 1024) {
      this.carouselViewport.current.parentElement.style.width = '840px';
    } else if (window.innerWidth > 768) {
      this.carouselViewport.current.parentElement.style.width = '630px';
    } else {
      this.carouselViewport.current.parentElement.style.width = '420px';
    }
  }

  checkIfSlidesAllTheWayOver() {
    // if scrollLeft == 0
    // hide left button
    const allTheWayLeft = (this.carouselViewport.current.scrollLeft === 0);

    // if scrollLeft + viewPortOffset.length === whole viewPort length
    // 50 cards - each 120px: 50 * 120 === whole viewPort length
    // hide the rightScrollButton

    const amoutOfScrolled = this.carouselViewport.current.scrollLeft;
    const viewportLength = this.carouselViewport.current.clientWidth;

    const totalCarouselWidth = this.carouselViewport.current.scrollWidth;
    let allTheWayRight = false;
    (amoutOfScrolled + viewportLength === totalCarouselWidth) && (allTheWayRight = true);
    (this.state.allTheWayLeft !== allTheWayLeft || this.state.allTheWayRight !== allTheWayRight) &&
      this.setState({
        allTheWayLeft,
        allTheWayRight,
      });
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

  checkNumOfSlidesToScroll() {
    const numOfSlidesToScroll = window.innerWidth <= 900 ? 2 : 4;
    this.state.numOfSlidesToScroll !== numOfSlidesToScroll &&
    this.setState({
      numOfSlidesToScroll,
    });
  }

  handleClick(e) {
    const clickedBtn = (e.currentTarget.classList.contains(`${CN}__left-nav`)) ? 'left' :'right';
    if (clickedBtn === 'right') {
      this.setState({ disabled: false });
    }

    const carouselViewport = this.carouselViewport.current;
    const numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    const widthOfSlide = this.state.widthOfSlide;
    let newPos = 0;
    clickedBtn === 'left' ?
      (newPos = carouselViewport.scrollLeft - (numOfSlidesToScroll * widthOfSlide)) :
      (newPos = carouselViewport.scrollLeft + (numOfSlidesToScroll * widthOfSlide));
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = (numOfSlidesToScroll * timeToMoveOneSlide);

    scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: 'scrollLeft',
    });
  }

  renderSlides() {
    const { items } = this.props;

    return items.map((state) =>
      <Slide
        image = {state.images[0].url[0]}
        name = {state.productName}
        category = {state.category}
        key = {state.productName}
      />
    );
  }

  render() {
    const {
      allTheWayLeft,
      allTheWayRight,
    } = this.state;
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
      <div className = {CN}>
        <button
          onClick={this.handleClick}
          className={ leftNavClasses }
        >
          <i className={`${CN}__arrow-button chevron left icon`}></i>
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
          <i className = {`${CN}__arrow-button chevron right icon`}></i>
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
