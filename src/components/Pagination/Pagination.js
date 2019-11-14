/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Pagination.scss';

const CN = 'pagination';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidInput: true,
      isAnimation: false
    };

    this.setPage = this.setPage.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.checkThenChangePage = this.checkThenChangePage.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { currentPage } = this.props;

    this.inputRef.current.value = currentPage;
  }

  componentDidUpdate({ currentPage: prevCurrentPage }) {
    const { currentPage, isValidInput, numberOfPages } = this.props;

    if (prevCurrentPage !== currentPage) {
      this.inputRef.current.value = currentPage;

      !isValidInput
        && this.setState({
          isValidInput: true
        });
    }

    if (numberOfPages === 1) {
      this.inputRef.current.value = 1;
    }
  }

  onAnimationEnd() {
    this.setState({
      isAnimation: false
    });
  }

  setCurrentPage(value) {
    const { setCurrentPage } = this.props;

    setCurrentPage(+value);
  }

  setPage(e) {
    this.setCurrentPage(+e.target.innerText);
  }

  goToPrevPage() {
    const { currentPage } = this.props;

    this.setCurrentPage(currentPage - 1);
  }

  goToNextPage() {
    const { currentPage } = this.props;

    this.setCurrentPage(currentPage + 1);
  }

  checkThenChangePage(e) {
    const { numberOfPages } = this.props;

    const {
      target: { value: inputValue }
    } = e;

    if (inputValue === '') {
      this.setState({
        isValidInput: true
      });
      return;
    }

    if (inputValue > numberOfPages || inputValue < 1) {
      this.setState({
        isValidInput: false,
        isAnimation: true
      });
    } else {
      this.setCurrentPage(+inputValue);

      this.setState({
        isValidInput: true
      });
    }
  }

  renderNumbers() {
    const { visibleNumbers, currentPage, numberOfPages } = this.props;
    const arrayOfPages = [...Array(numberOfPages)].map((e, i) => i + 1);
    const numbersFromCurrentPage = Math.floor(visibleNumbers / 2);
    let arrayOfVisibleNumOfPages = [...arrayOfPages];

    if (numberOfPages >= 3) {
      arrayOfVisibleNumOfPages = arrayOfPages.slice(
        currentPage - numbersFromCurrentPage - 1,
        currentPage + numbersFromCurrentPage
      );

      currentPage <= numbersFromCurrentPage
        && (arrayOfVisibleNumOfPages = arrayOfPages.slice(0, visibleNumbers));

      numberOfPages - currentPage < numbersFromCurrentPage
        && (arrayOfVisibleNumOfPages = arrayOfPages.slice(-visibleNumbers));
    }

    return arrayOfVisibleNumOfPages.map((num) => (
      <span
        key={num}
        className={cx(`${CN}-nav-number`, {
          [`${CN}-nav-number--active`]: num === currentPage
        })}
        onClick={this.setPage}
      >
        {num}
      </span>
    ));
  }

  render() {
    const { className, numberOfPages, currentPage } = this.props;
    const { isValidInput, isAnimation } = this.state;

    return (
      <div className={cx(CN, className)}>
        <div className={`${CN}-nav-input-container`}>
          <span className={`${CN}-nav-input-container__text`}>go to page</span>
          <input
            ref={this.inputRef}
            disabled={numberOfPages === 1}
            onInput={this.checkThenChangePage}
            className={cx(`${CN}-nav-input-container__input`, {
              [`${CN}-nav-input-container__input--error`]: !isValidInput,
              [`${CN}-nav-input-container__input--animation`]: isAnimation
            })}
            onAnimationEnd={this.onAnimationEnd}
            type="number"
            min="1"
            max={numberOfPages}
          />
          <span className={`${CN}-nav-input-container__text`}>
            {` / ${numberOfPages}`}
          </span>
        </div>
        {numberOfPages > 1 && (
          <div className={`${CN}-nav-numbers`}>
            <div
              onClick={this.setCurrentPage}
              className={cx(`${CN}-nav-arrow`, `${CN}-nav-arrow-left`, {
                [`${CN}-nav-arrow--disabled`]: currentPage === 1
              })}
            >
              <i className={`icon chevron left ${CN}-nav-arrow__icon`} />
            </div>
            {this.renderNumbers()}
            <div
              onClick={this.goToNextPage}
              className={cx(`${CN}-nav-arrow`, `${CN}-nav-arrow-right`, {
                [`${CN}-nav-arrow--disabled`]: currentPage === numberOfPages
              })}
            >
              <i className={`icon chevron right ${CN}-nav-arrow__icon`} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  className: '',
  currentPage: 1
};

export default Pagination;
