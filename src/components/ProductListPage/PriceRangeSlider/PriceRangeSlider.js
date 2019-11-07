import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PriceRangeSlider.scss';

class PriceRangeSlider extends Component {
  handleChange = (e) => {
    const { setPriceRange } = this.props;
    const {
      target: {
        value,
        dataset: { label }
      }
    } = e;
    const formattedVal = parseFloat(value);

    setPriceRange(formattedVal, label);
  };

  render() {
    const {
      min, max, step,
      priceRange: { fromPrice, toPrice }
    } = this.props;

    return (
      <section className="rangeInput">
        <input
          value={fromPrice}
          data-label="fromPrice"
          onChange={this.handleChange}
          step={step}
          min={min}
          max={max}
          type="range"
        />
        <input
          value={toPrice}
          data-label="toPrice"
          onChange={this.handleChange}
          step={step}
          min={min}
          max={max}
          type="range"
        />
        <div className="rangeInput__prise">
          <div>{fromPrice}</div>
          <div>{toPrice}</div>
        </div>
      </section>
    );
  }
}

PriceRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setPriceRange: PropTypes.func.isRequired,
  priceRange: PropTypes.object.isRequired
};

export default PriceRangeSlider;
