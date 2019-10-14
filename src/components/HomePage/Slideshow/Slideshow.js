import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ArrowButton from './ArrowButton';
import Slide from './SlideContainer';
import { ANIMATION_NAMES, ARROW_BUTTON_TYPES } from '../../../constants/SlideshowConst';
import './Slideshow.scss';

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

  sliderInterval = null;

  componentDidMount() {
    this.startSlideShow();
  }

  componentDidUpdate(prevProps, { autoPlay: prevStateAutoPlay }) {
    const { autoPlay } = this.state;

    if (autoPlay && autoPlay !== prevStateAutoPlay) {
      this.startSlideShow();
    }
  }

  isAnimationZoom() {
    const { animation } = this.props;

    return animation === ZOOM_IN || animation === ZOOM_OUT;
  };


  updateIndex(number, newIndex) {
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

  nextSlide() {
    const { index } = this.state;
    const { slideData } = this.props;

    index !== slideData.length && this.updateIndex(1);
  };

  prevSlide() {
    const { index } = this.state;
    const indexOfLastCloneSlide = -1;

    index !== indexOfLastCloneSlide && this.updateIndex(-1);
  };

  changeSlideWithButton(type) {
    this.setState({
      isClicked: true,
    });

    type === RIGHT && this.nextSlide();
    type === LEFT && this.prevSlide();
  };

  changeSlideWithPagination(e, i) {
    const { index } = this.state;

    this.setState({ isClicked: true });
    i !== index && this.updateIndex('', i);
  };

  deleteAutoPlay() {
    this.setState({
      autoPlay: false,
    });

    clearInterval(this.sliderInterval);
  };

  startSlideShow() {
    this.sliderInterval = setInterval(this.nextSlide.bind(this), 4000);
  };

  onMouseLeftHandler() {
    const { isClicked } = this.state;

    !isClicked &&
      this.setState({
        autoPlay: true,
      });
  };

  transitionEnd() {
    const { index } = this.state;
    const { slideData } = this.props;
    const slideDataLength = slideData.length;
    const indexOfLastCloneSlide = -1;
    const indexOfLastSlide = slideDataLength - 1;

    index === slideDataLength &&
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

  removeTransform() {
    this.setState({
      isTransform: false,
    });
  };

  renderPagination() {
    const { index } = this.state;
    const { slideData } = this.props;

    return slideData.map((el, dataIndex) => (
      <div
        key={el.id}
        className={cx(`${CN}-pagination__item`, {
          [`${CN}-pagination__item--active`]: index === dataIndex,
        })}
        onClick={(e) => this.changeSlideWithPagination(e, dataIndex)}
      ></div>
    ));
  };

  renderSlides() {
    const { index, prevIndex, isTransform } = this.state;
    const { slideData, animation } = this.props;
    const transformSlide = `translateX(${100 *(index - prevIndex)}%)`;

    const {
      0: firstCloneData,
      length,
      [length - 1]: lastCloneData,
    } = slideData;

    const slides = slideData.map((el, i) => (
      <Slide
        key={el.id}
        bgImage={el.img}
        transform={
          prevIndex === i && isTransform ? transformSlide : 'none'
        }
        animation={cx({
          [animation]:
            this.isAnimationZoom() && i === prevIndex,
          [FADE]: animation === FADE && i === index,
        })}
        onAnimationEnd={this.removeTransform.bind(this)}
      >
        {el.component}
      </Slide>));

    return [
      <Slide key="lastClone" bgImage={lastCloneData.img}>
        {lastCloneData.component}
      </Slide>,
      ...slides,
      <Slide key="firstClone" bgImage={firstCloneData.img}>
        {firstCloneData.component}
      </Slide>,
    ];
  }

  render() {
    const { index, shouldTransition } = this.state;
    const { animation } = this.props;
    const slides = this.renderSlides();

    const styleContainer = {
      transform: `translateX(-${(100 / slides.length) *
        (index + 1)}%)`,
    };

    return (
      <div
        className={`${CN}`}
        onMouseEnter={this.deleteAutoPlay.bind(this)}
        onMouseLeave={this.onMouseLeftHandler.bind(this)}
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
          onTransitionEnd={this.transitionEnd.bind(this)}
        >
          {slides}
        </div>
        <div className={`${CN}-pagination`}>{this.renderPagination()}</div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  animation: PropTypes.oneOf([CAROUSEL, FADE, ZOOM_IN, ZOOM_OUT]),
  slideData: PropTypes.arrayOf(PropTypes.shape( {
    id: PropTypes.oneOfType([PropTypes.string,
      PropTypes.number]),
    img: PropTypes.string,
    component: PropTypes.element,
  })),
};

Slideshow.defaultProps = {
  animation: CAROUSEL,
  slideData: [],
};

export default Slideshow;
