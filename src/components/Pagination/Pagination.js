import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './Pagination.scss';

const CN = 'pagination';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: props.numberOfPages,
      currentPage: props.numberOfPages > 2 ? 2 : 1
    };

    this.changeCurrentNumber = this.changeCurrentNumber.bind(this);
    this.renderNumbers = this.renderNumbers.bind(this);
    this.prevCurrentNumber = this.prevCurrentNumber.bind(this);
    this.nextCurrentNumber = this.nextCurrentNumber.bind(this);
  }

  changeCurrentNumber(e) {
    (this.setState({
      currentPage: +e.target.innerText
    }));
  }

  prevCurrentNumber() {
    const { currentPage } = this.state;

    currentPage !== 1
    && (this.setState(({ currentPage: prevCurrentPage }) => ({
      currentPage: prevCurrentPage - 1
    })));
  }

  nextCurrentNumber() {
    const { currentPage, numberOfPages } = this.state;

    currentPage !== numberOfPages
    && (this.setState(({ currentPage: prevCurrentPage }) => ({
      currentPage: prevCurrentPage + 1
    })));
  }

  renderNumbers() {
    const { numberOfPages, currentPage } = this.state;

    if (numberOfPages >= 3) {
      let arrayOfNum = [currentPage - 1, currentPage, currentPage + 1];
      currentPage === 1 && (arrayOfNum = [currentPage, currentPage + 1, currentPage + 2]);
      currentPage === numberOfPages && (arrayOfNum = [currentPage - 2, currentPage - 1, currentPage]);

      return arrayOfNum.map((num) => (
        <span className={cx(`${CN}-nav-number`, { [`${CN}-nav-number--active`]: num === currentPage })} onClick={this.changeCurrentNumber}>
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
    const { currentPage, numberOfPages } = this.state;
    return (
      <div className={cx(CN, className)}>
        <div onClick={this.prevCurrentNumber} className={cx(`${CN}-arrow-nav`, `${CN}-arrow-nav-left`, { [`${CN}-nav-arrow--disabled`]: currentPage === 1 })}>
          <i className="icon chevron left" />
        </div>
        {this.renderNumbers()}
        <div onClick={this.nextCurrentNumber} className={cx(`${CN}-arrow-nav`, `${CN}-arrow-nav-right`, { [`${CN}-nav-arrow--disabled`]: currentPage === numberOfPages })}>
          <i className="icon chevron right" />
        </div>
      </div>
    );
  }
}

export default Pagination;
