import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Pagination.scss';

const CN = 'pagination';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPages: props.numberOfPages,
      currentPage: props.numberOfPages > 2 ? 2 : 1,
      isValidInput: true,
      isAnimation: false
    };

    this.changeCurrentNumber = this.changeCurrentNumber.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
    this.goToPrevCurrentNumber = this.goToPrevCurrentNumber.bind(this);
    this.goToNextCurrentNumber = this.goToNextCurrentNumber.bind(this);
    this.checkThenChangeCurrentNumber = this.checkThenChangeCurrentNumber.bind(
      this
    );
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { currentPage } = this.state;

    this.inputRef.current.value = currentPage;
  }

  onAnimationEnd() {
    this.setState({
      isAnimation: false
    });
  }

  changeCurrentNumber(e) {
    this.inputRef.current.value = +e.target.innerText;
    this.setState({
      currentPage: +e.target.innerText,
      isValidInput: true
    });
  }

  goToPrevCurrentNumber() {
    const { currentPage } = this.state;
    this.inputRef.current.value = currentPage - 1;
    currentPage !== 1
      && this.setState(({ currentPage: prevCurrentPage }) => ({
        currentPage: prevCurrentPage - 1
      }));
  }

  goToNextCurrentNumber() {
    const { currentPage, numberOfPages } = this.state;

    this.inputRef.current.value = currentPage + 1;

    currentPage !== numberOfPages
      && this.setState(({ currentPage: prevCurrentPage }) => ({
        currentPage: prevCurrentPage + 1
      }));
  }

  checkThenChangeCurrentNumber(e) {
    const { currentPage, numberOfPages } = this.state;
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
      this.setState({
        isValidInput: true,
        currentPage: +inputValue
      });
    }
  }

  onAnimationEnd() {
    this.setState({
      isAnimation: false
    });
  }

  renderNumbers() {
    const { numberOfPages, currentPage } = this.state;

    if (numberOfPages >= 3) {
      let arrayOfNum = [currentPage - 1, currentPage, currentPage + 1];
      currentPage === 1
        && (arrayOfNum = [currentPage, currentPage + 1, currentPage + 2]);
      currentPage === numberOfPages
        && (arrayOfNum = [currentPage - 2, currentPage - 1, currentPage]);

      return arrayOfNum.map((num) => (
        <span
          className={cx(`${CN}-nav-number`, {
            [`${CN}-nav-number--active`]: num === currentPage
          })}
          onClick={this.changeCurrentNumber}
        >
          {num}
        </span>
      ));
    }

    if (numberOfPages === 2) {
      return [
        <span onClick={this.changeCurrentNumber}>{1}</span>,
        <span onClick={this.changeCurrentNumber}>{2}</span>
      ];
    }

    if (numberOfPages === 1) {
      return [
        <span>{currentPage}</span>,
        <span onClick={this.changeCurrentNumber}>1</span>
      ];
    }
  }

  render() {
    const { className } = this.props;
    const {
      currentPage,
      numberOfPages,
      isValidInput,
      isAnimation
    } = this.state;

    return (
      <div className={cx(CN, className)}>
        <div className={`${CN}-nav-input-container`}>
          <input
            ref={this.inputRef}
            onInput={this.checkThenChangeCurrentNumber}
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
        <div
          onClick={this.goToPrevCurrentNumber}
          className={cx(`${CN}-nav-arrow`, `${CN}-nav-arrow-left`, {
            [`${CN}-nav-arrow--disabled`]: currentPage === 1
          })}
        >
          <i className={`icon chevron left ${CN}-nav-arrow__icon`} />
        </div>
        {this.renderNumbers()}
        <div
          onClick={this.goToNextCurrentNumber}
          className={cx(`${CN}-nav-arrow`, `${CN}-nav-arrow-right`, {
            [`${CN}-nav-arrow--disabled`]: currentPage === numberOfPages
          })}
        >
          <i className={`icon chevron right ${CN}-nav-arrow__icon`} />
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  numberOfPages: PropTypes.number.isRequired
};

Pagination.defaultProps = {
  className: ''
};

export default Pagination;
