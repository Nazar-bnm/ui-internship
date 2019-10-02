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
  };

  sliderInterval = null;

  nextSlide = () => {
    this.state.index != slideData.length - 1 ?
      this.setState({ index: this.state.index + 1 }) :
      this.setState({ index: 0 });
  }

  prevSlide = () => {
    this.state.index != 0 ?
      this.setState({ index: this.state.index - 1 }) :
      this.setState({ index: slideData.length - 1 });
  }

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
    });
  };

  deleteAutomation = () => {
    this.setState({
      isInterval: false,
    });
    clearInterval(this.sliderInterval);
  };

  startSlideShow = () => {
    this.sliderInterval = setInterval(this.nextSlide, 2000);
  };

  mouseLeft = () => {
    !this.state.isClicked &&
      this.setState({
        isInterval: true,
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

    return (
      <div
        className="slideshow-container"
        onMouseEnter={this.deleteAutomation}
        onMouseLeave={this.mouseLeft}
      >
        <ArrowButton left className="arrow-button" onClick={this.changeSlideWithButton.bind(this, 'left')} />
        <ArrowButton right className="arrow-button" onClick={this.changeSlideWithButton.bind(this, 'right')}/>
        <Slide
          key={this.state.index}
          description={slideData[this.state.index].description}
          title={slideData[this.state.index].title}
          imageUrl={slideData[this.state.index].img}
          bgImage={slideData[this.state.index].img}
        />
        {pagination}
      </div>
    );
  }
}

export default Slideshow;
