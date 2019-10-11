/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ArrowButton from './ArrowButton';
import Slide from './SlideContainer';
import './Slideshow.scss';
import { ANIMATION_NAMES, ARROW_BUTTON_TYPES } from '../../../constants/SlideshowConst';

const { CAROUSEL, FADE, ZOOM_IN, ZOOM_OUT } = ANIMATION_NAMES;
const { LEFT, RIGHT } = ARROW_BUTTON_TYPES;
const CN = 'slideshow';

class Slideshow extends Component {
  state = {
    index: 0,
    prevIndex: null,
    autoPlay: true,
    isClicked: false,
    shouldTransition: true,
    isTransform: false,
  };

  isAnimationZoom = () => {
    const { animation } = this.props;

    return animation === ZOOM_IN || animation === ZOOM_OUT;
  };

  sliderInterval = null;

  updateIndex = (number, newIndex) => {
    this.setState(({ index: prevIndex }) => {
      return {
        index: newIndex !== undefined ? newIndex : prevIndex + number,
        shouldTransition: true,
        ...(this.isAnimationZoom() ?
          { isTransform: true, prevIndex: prevIndex } :
          {}),
      };
    });
  };

  nextSlide = () => {
    const { index } = this.state;
    const { slideData } = this.props;

    index != slideData.length && this.updateIndex(1);
  };

  prevSlide = () => {
    const { index } = this.state;
    const indexOfLastCloneSlide = -1;

    index != indexOfLastCloneSlide && this.updateIndex(-1);
  };

  changeSlideWithButton = (type) => {
    this.setState({
      isClicked: true,
    });

    type === RIGHT && this.nextSlide();
    type === LEFT && this.prevSlide();
  };

  changeSlideWithPagination = (e, i) => {
    const { index } = this.state;

    this.setState({ isClicked: true });
    i != index && this.updateIndex('', i);
  };

  deleteAutoPlay = () => {
    this.setState({
      autoPlay: false,
    });

    clearInterval(this.sliderInterval);
  };

  startSlideShow = () => {
    this.sliderInterval = setInterval(this.nextSlide, 4000);
  };

  onMouseLeftHandler = () => {
    const { isClicked } = this.state;

    !isClicked &&
      this.setState({
        autoPlay: true,
      });
  };

  transitionEnd = () => {
    const { index } = this.state;
    const { slideData } = this.props;
    const slideDataLength = slideData.length;
    const indexOfLastCloneSlide = -1;
    const indexOfFirstCloneSlide = slideDataLength;
    const indexOfLastSlide = slideDataLength - 1;

    index === indexOfFirstCloneSlide &&
      this.setState({
        index: 0,
        shouldTransition: false,
      });

    index === indexOfLastCloneSlide &&
      this.setState({
        index: indexOfLastSlide,
        shouldTransition: false,
      });
  };

  removeTransform = () => {
    this.setState({
      isTransform: false,
    });
  };

  componentDidMount() {
    this.startSlideShow();
  }

  componentDidUpdate(prevProps, { autoPlay: prevStateAutoPlay }) {
    const { autoPlay } = this.state;

    if (autoPlay && autoPlay != prevStateAutoPlay) {
      this.startSlideShow();
    }
  }

  render() {
    const { index, prevIndex, isTransform, shouldTransition } = this.state;
    const { slideData, animation } = this.props;
    const getPaginationClassNames = (slideIndex) =>
      cx(`${CN}-pagination__item`, {
        [`${CN}-pagination__item--active`]: index === slideIndex,
      });
    const pagination = slideData.map((el, i) => (
      <div
        key={i}
        className={getPaginationClassNames(i)}
        onClick={(e) => this.changeSlideWithPagination(e, i)}
      ></div>
    ));

    const styleSlide = {
      transform: `translateX(${100 *
        (index - prevIndex)}%)`,
    };

    const slides = slideData.map((el, i) => (
      <Slide
        key={el.id}
        bgImage={el.img}
        style={
          prevIndex === i && isTransform ? styleSlide : {}
        }
        animation={cx({
          [animation]:
            this.isAnimationZoom() && i === prevIndex,
          [FADE]: animation === FADE && i === index,
        })}
        onAnimationEnd={this.removeTransform}
      >
        {' '}
        {el.component}
      </Slide>
    ));

    const {
      0: firstCloneData,
      length,
      [length - 1]: lastCloneData,
    } = slideData;

    const firstSlideClone = (
      <Slide key="firstClone" bgImage={firstCloneData.img}>
        {firstCloneData.component}
      </Slide>
    );

    const lastSlideClone = (
      <Slide key="lastClone" bgImage={lastCloneData.img}>
        {lastCloneData.component}
      </Slide>
    );

    const allSlides = [lastSlideClone, ...slides, firstSlideClone];

    const styleContainer = {
      transform: `translateX(-${(100 / allSlides.length) *
        (index + 1)}%)`,
    };

    return (
      <div
        className={`${CN}`}
        onMouseEnter={this.deleteAutoPlay}
        onMouseLeave={this.onMouseLeftHandler}
      >
        <ArrowButton
          type={LEFT}
          className={`${CN}__arrow-button`}
          onClick={this.changeSlideWithButton.bind(this, LEFT)}
        />
        <ArrowButton
          type={RIGHT}
          className={`${CN}__arrow-button`}
          onClick={this.changeSlideWithButton.bind(this, RIGHT)}
        />
        <div
          className={cx(`${CN}-slides`, {
            transition: shouldTransition,
            transitionCarousel:
              shouldTransition && animation === CAROUSEL,
          })}
          style={styleContainer}
          onTransitionEnd={this.transitionEnd}
        >
          {allSlides}
        </div>
        <div className={`${CN}-pagination`}>{pagination}</div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  animation: PropTypes.oneOf([CAROUSEL, FADE, ZOOM_IN, ZOOM_OUT]),
  slideData: PropTypes.array,
};

Slideshow.defaultProps = {
  animation: CAROUSEL,
  slideData: [],
};

export default Slideshow;
