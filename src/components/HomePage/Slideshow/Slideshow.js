/* eslint-disable react/prop-types */
/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import ArrowButton from '../ArrowButton';
import Slide from '../Slide/Slide';
import './Slideshow.scss';
import cx from 'classnames';
import { ANIMATION_NAMES } from '../../../const';

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
    const { ZOOM_IN, ZOOM_OUT } = ANIMATION_NAMES;
    return animation === ZOOM_IN || animation === ZOOM_OUT;
  };

  sliderInterval = null;

  updateIndex = (number, newIndex) => {
    this.setState(({ index }) => {
      return {
        index: newIndex !== undefined ? newIndex : index + number,
        shouldTransition: true,
        ...(this.isAnimationZoom() ?
          { isTransform: true, prevIndex: index } :
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
    index != -1 && this.updateIndex(-1);
  };

  changeSlideWithButton = (type) => {
    this.setState({
      isClicked: true,
    });
    type === 'right' && this.nextSlide();
    type === 'left' && this.prevSlide();
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

    index === slideData.length &&
      this.setState({
        index: 0,
        shouldTransition: false,
      });
    index === -1 &&
      this.setState({
        index: slideData.length - 1,
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
    const { slideData } = this.props;
    const { CAROUSEL, FADE } = ANIMATION_NAMES;
    const getPaginationClassNames = (slideIndex) =>
      cx('slider-pagination', {
        'slider-pagination--active': index === slideIndex,
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
          [this.props.animation]:
            this.isAnimationZoom() && i === prevIndex,
          [FADE]: this.props.animation === FADE && i === index,
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
      <Slide key="firstClone" bgImage={firstCloneData.img} animation="">
        {' '}
        {firstCloneData.component}
      </Slide>
    );

    const lastSlideClone = (
      <Slide key="lastClone" bgImage={lastCloneData.img} animation="">
        {' '}
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
        className="slideshow-container"
        onMouseEnter={this.deleteAutoPlay}
        onMouseLeave={this.onMouseLeftHandler}
      >
        <ArrowButton
          type="left"
          className="arrow-button"
          onClick={this.changeSlideWithButton.bind(this, 'left')}
        />
        <ArrowButton
          type="right"
          className="arrow-button"
          onClick={this.changeSlideWithButton.bind(this, 'right')}
        />
        <div
          className={cx('slides-container', {
            transition: shouldTransition,
            transitionCarousel:
              shouldTransition && this.props.animation === CAROUSEL,
          })}
          style={styleContainer}
          onTransitionEnd={this.transitionEnd}
        >
          {allSlides}
        </div>
        <div className="slider-pagination-container">{pagination}</div>
      </div>
    );
  }
}

export default Slideshow;
