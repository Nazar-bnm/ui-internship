import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { debounce } from 'lodash';
import { scrollTo } from '../../helpers';

import './Carousel.scss';

export const CN = 'carousel';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfSlidesToScroll: 2,
      allTheWayStart: false,
      allTheWayEnd: false,
      slidesCount: this.getSlidesCount()
    };

    this.carouselContainer = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.resizeTheCarousel = debounce(this.resizeTheCarousel, 500);
    this.countTheSlideLength = this.countTheSlideLength.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.resizeTheCarousel();
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
    const { visibleNumOfSlides } = this.props;

    let count;

    if (window.innerWidth >= 1024) {
      count = visibleNumOfSlides.desktop;
    } else if (window.innerWidth >= 768) {
      count = visibleNumOfSlides.tablet;
    } else if (window.innerWidth >= 320) {
      count = visibleNumOfSlides.mobile;
    }

    return count;
  };

  resizeTheCarousel() {
    this.setState({ slidesCount: this.getSlidesCount() });
    this.countTheSlideLength();
  }

  countTheSlideLength() {
    const { vertical } = this.props;

    let { clientWidth: scrollLength } = this.carouselContainer.current;
    const { slidesCount } = this.state;
    vertical
      && ({ clientHeight: scrollLength } = this.carouselContainer.current);

    this.setState({ lengthOfSlide: scrollLength / slidesCount });
  }

  checkIfSlidesAllTheWayOver() {
    const { vertical } = this.props;
    let {
      scrollLeft: howMuchIsScrolled,
      scrollWidth: scrollLength,
      clientWidth: clientLength
    } = this.carouselContainer.current;

    vertical
      && ({
        scrollTop: howMuchIsScrolled,
        scrollHeight: scrollLength,
        clientHeight: clientLength
      } = this.carouselContainer.current);

    // if scrollLeft == 0
    // hide left button
    const allTHeWayStartValue = howMuchIsScrolled === 0;
    // if scrollLeft + ContainerOffset.length === whole Container length
    // 9 cards - each 120px: 9 * 210all === whole Container length
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
    const numOfSlidesToScroll = window.innerWidth <= 1024 ? 1 : 2;
    const { numOfSlidesToScroll: numOfSlides } = this.state;

    numOfSlides !== numOfSlidesToScroll
      && this.setState({ numOfSlidesToScroll });
  }

  handleClick({ currentTarget }) {
    const clickedBtn = currentTarget.classList.contains(`${CN}__nav-from`)
      ? 'from'
      : 'to';
    const { numOfSlidesToScroll, lengthOfSlide } = this.state;
    const { vertical } = this.props;
    let { scrollLeft: howMuchIsScrolled } = this.carouselContainer.current;
    vertical
      && ({ scrollTop: howMuchIsScrolled } = this.carouselContainer.current);
    const step = numOfSlidesToScroll * lengthOfSlide;
    const newPos = clickedBtn === 'from'
      ? howMuchIsScrolled - step
      : howMuchIsScrolled + step;
    const timeToMoveOneSlide = 200;
    const totalTimetoMove = numOfSlidesToScroll * timeToMoveOneSlide;
    scrollTo({
      element: this.carouselContainer,
      to: newPos,
      duration: totalTimetoMove,
      scrollDirection: vertical ? 'scrollTop' : 'scrollLeft'
    });
  }

  renderChildren() {
    const { children, vertical } = this.props;
    const { lengthOfSlide } = this.state;
    let style = { width: `${lengthOfSlide}px` };
    vertical && (style = { height: `${lengthOfSlide}px` });
    const listOfChildren = [...children];

    return listOfChildren.map((item) => (
      <div key={item.id} className={`${CN}__child`} style={style}>
        {item}
      </div>
    ));
  }

  render() {
    const { allTheWayStart, allTheWayEnd } = this.state;
    const navClasses = cx(`${CN}__nav`);
    const { vertical, className } = this.props;
    const fromNavClasses = cx(navClasses, `${CN}__nav-from`, {
      [`${CN}__nav-disabled`]: allTheWayStart,
      [`${CN}__left-nav`]: !vertical,
      [`${CN}__top-nav`]: vertical
    });
    const toNavClasses = cx(navClasses, `${CN}__nav-to`, {
      [`${CN}__nav-disabled`]: allTheWayEnd,
      [`${CN}__right-nav`]: !vertical,
      [`${CN}__bottom-nav`]: vertical
    });

    return (
      <div className={cx(CN, className)}>
        <div
          className={`${CN}-container`}
          ref={this.carouselContainer}
          onScroll={this.onScroll}
        >
          <div className={cx(`${CN}__viewport`, { vertical })}>{this.renderChildren()}</div>
        </div>
        <button
          className={fromNavClasses}
          type="button"
          onClick={this.handleClick}
        >
          <i className={cx(`${CN}__arrow-button`, 'chevron', 'icon', { left: !vertical, up: vertical })} />
        </button>
        <button
          type="button"
          className={toNavClasses}
          onClick={this.handleClick}
        >
          <i className={cx(`${CN}__arrow-button`, 'chevron', 'icon', { right: !vertical, down: vertical })} />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string
};

Carousel.defaultProps = {
  className: ''
};

export default Carousel;
