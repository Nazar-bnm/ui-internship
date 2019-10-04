/* eslint-disable no-invalid-this */
import React, { Component } from 'react';
import ArrowButton from '../ArrowButton';
import Slide from '../Slide/Slide';
import './Slideshow.scss';
import { slideData } from './SlideshowDate';

class Slideshow extends Component {
  state = {
    index: 0,
    isInterval: true,
    isClicked: false,
    shouldTransition: true,
  };

  sliderInterval = null;

  nextSlide = () => {
    this.state.index != slideData.length &&
      this.setState({ index: this.state.index + 1,
        shouldTransition: true });
  };

  prevSlide = () => {
    this.state.index != -1 &&
      this.setState({ index: this.state.index - 1,
        shouldTransition: true });
  };
  changeSlideWithButton = (type) => {
    this.setState({
      isClicked: true,
    });
    type === 'right' && this.nextSlide();
    type === 'left' && this.prevSlide();
  };

  changeSlideWithPagination = (e, i) => {
    this.setState({
      index: i,
      isClicked: true,
      shouldTransition: true,
    });
  };

  deleteAutomation = () => {
    this.setState({
      isInterval: false,
    });
    clearInterval(this.sliderInterval);
  };

  startSlideShow = () => {
    this.sliderInterval = setInterval(this.nextSlide, 4000);
  };

  mouseLeft = () => {
    !this.state.isClicked &&
      this.setState({
        isInterval: true,
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

  componentDidMount() {
    this.startSlideShow();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isInterval &&
      this.state.isInterval != prevState.isInterval
    ) {
      this.startSlideShow();
    }
  }

  render() {
    const classNamesArr = ['slider-pagination'];
    const classNames = classNamesArr.join(' ');
    const activeClass = ['slider-pagination--active', ...classNamesArr].join(
      ' '
    );
    const pagination = slideData.map((el, i) => (
      <div
        key={i}
        className={this.state.index === i ? activeClass : classNames}
        onClick={(e) => this.changeSlideWithPagination(e, i)}
      ></div>
    ));
    const slides = slideData.map((el, i) => (
      <Slide
        key={el.id}
        description={el.description}
        bgImage={el.img}
        className={(this.state.index - 1) === i ? 'transform' : ''}
        animation={i ===(this.state.index - 1) ? 'zoomIn' : ''}
      />
    ));
    const firstSlide = (
      <Slide
        key="23"
        description={slideData[0].description}
        bgImage={slideData[0].img}
        className={this.state.showAnimation ? animation : ''}
      />
    );

    const lastSlide = (
      <Slide
        key="32"
        description={slideData[slideData.length - 1].description}
        bgImage={slideData[slideData.length - 1].img}
        className={this.state.showAnimation ? animation : ''}
      />
    );

    const slidesMore = [lastSlide, ...slides, firstSlide];
    const animation = 'zoomIn';
    const styleContainer = {
      transform: `translateX(-${(100 / (slideData.length + 2)) *
        (this.state.index + 1)}%)`,
    };

    return (
      <div
        className="slideshow-container"
        onMouseEnter={this.deleteAutomation}
        onMouseLeave={this.mouseLeft}
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
          className={`slides-container ${this.state.shouldTransition ? 'transition' : ''}`}
          style={styleContainer}
          onTransitionEnd={this.transitionEnd}
        >
          {slidesMore}
        </div>
        <div className="slider-pagination-container">{pagination}</div>
      </div>
    );
  }
}

export default Slideshow;
