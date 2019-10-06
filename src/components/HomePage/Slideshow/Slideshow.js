/* eslint-disable react/prop-types */
/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import ArrowButton from '../ArrowButton';
import Slide from '../Slide/Slide';
import './Slideshow.scss';
import { slideData } from './SlideshowDate';
import cx from 'classnames';

class Slideshow extends Component {
  state = {
    index: 0,
    prevIndex: null,
    autoPlay: true,
    isClicked: false,
    shouldTransition: true,
    isTransform: false,
  };

  isAnimationZoom =
    this.props.animation === 'zoomIn' || this.props.animation === 'zoomOut';

  sliderInterval = null;

  updateIndex = (number, newIndex) => {
    this.setState((prevState) => {
      return {
        index: newIndex !== undefined ? newIndex : prevState.index + number,
        shouldTransition: true,
        ...(this.isAnimationZoom ?
          { isTransform: true, prevIndex: prevState.index } :
          {}),
      };
    });
  };

  nextSlide = () => {
    this.state.index != slideData.length && this.updateIndex(1);
  };

  prevSlide = () => {
    this.state.index != -1 && this.updateIndex(-1);
  };

  changeSlideWithButton = (type) => {
    this.setState({
      isClicked: true,
    });
    type === 'right' && this.nextSlide();
    type === 'left' && this.prevSlide();
  };

  changeSlideWithPagination = (e, i) => {
    this.setState({ isClicked: true });
    i != this.state.index && this.updateIndex('', i);
  };

  deleteAutoPlay = () => {
    this.setState({
      autoPlay: false,
    });
    clearInterval(this.sliderInterval);
  };

  startSlideShow = () => {
    this.sliderInterval = setInterval(this.nextSlide, 2000);
  };

  onMouseLeftHandler = () => {
    !this.state.isClicked &&
      this.setState({
        autoPlay: true,
      });
  };

  transitionEnd = () => {
    this.state.index === slideData.length &&
      this.setState({
        index: 0,
        shouldTransition: false,
      });
    this.state.index === -1 &&
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.autoPlay && this.state.autoPlay != prevState.autoPlay) {
      this.startSlideShow();
    }
  }

  render() {
    const getPaginationClassNames = (i) =>
      cx('slider-pagination', {
        'slider-pagination--active': this.state.index === i,
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
        (this.state.index - this.state.prevIndex)}%)`,
    };

    const animation = 'zoomIn';

    const slides = slideData.map((el, i) => (
      <Slide
        key={el.id}
        description={el.description}
        bgImage={el.img}
        style={
          this.state.prevIndex === i && this.state.isTransform ? styleSlide : {}
        }
        animation={cx({ [animation]: i === this.state.prevIndex })}
        onAnimationEnd={this.removeTransform}
      />
    ));

    const {
      0: firstCloneData,
      length,
      [length - 1]: lastCloneData,
    } = slideData;

    const firstSlideClone = (
      <Slide
        key="firstClone"
        description={firstCloneData.description}
        bgImage={firstCloneData.img}
        animation=""
      />
    );

    const lastSlideClone = (
      <Slide
        key="lastClone"
        description={lastCloneData.description}
        bgImage={lastCloneData.img}
        animation=""
      />
    );

    const allSlides = [lastSlideClone, ...slides, firstSlideClone];
    const styleContainer = {
      transform: `translateX(-${(100 / allSlides.length) *
        (this.state.index + 1)}%)`,
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
            transition: this.state.shouldTransition,
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
