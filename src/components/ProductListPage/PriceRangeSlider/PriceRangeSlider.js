import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './PriceRangeSlider.scss';

class PriceRangeSlider extends Component {
  // constructor(props) {
  //   super(props);
  //   const { priceRange } = props;

  //   this.state = {
  //     currentMin: priceRange.from,
  //     currentMax: priceRange.to
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   // console.log(props.priceRange.from, 'from props');
  //   // console.log(props.priceRange.to, 'to props');
  //   // console.log(state.currentMin, 'state.currentMin');
  //   // console.log(state.currentMax, 'state.currentMax');
  //   if (props.priceRange.from !== state.currentMin && props.priceRange.to !== state.currentMax) {
  //     console.log(props.priceRange.from !== state.currentMin);

  //     // console.log(state.currentMax, 'state');
  //     return {
  //       currentMin: props.priceRange.from,
  //       currentMax: props.priceRange.to
  //     };
  //   }

  //   // Return null if the state hasn't changed
  //   return null;
  // }

  // getProgressStyle() {
  //   const {
  //     min, max, step,
  //     priceRange: { fromPrice, toPrice }
  //   } = this.props;

  //   const low = Math.round(100 * ((currentMin - from) / (to - from))) - 0.5;
  //   const high = Math.round(100 * ((currentMax - from) / (to - from))) + 0.5;

  //   return {
  //     '--low': `${low}%`,
  //     '--high': `${high}%`
  //   };
  // }

  handleChange = (e) => {
    const { setPriceRange } = this.props;
    const {
      target: {
        value,
        dataset: { label }
      }
    } = e;

    // this.setState({ [label]: parseFloat(value) }, () => {
    // const { currentMin, currentMax } = this.state;
    // const { priceRange: { from: currentMin, to: currentMax } } = this.props;


    // setPriceRange(currentMin, currentMax);
    const formattedVal = parseFloat(value);
    setPriceRange(formattedVal, label);
    // });
  };

  render() {
    const {
      min, max, step,
      priceRange: { fromPrice, toPrice }
    } = this.props;
    // console.log(this.props, 'tut');
    console.log('___price P range slider', this.props.priceRange);

    return (
      <>
        <section className="range-input">
          {/* <div className="range-input-progress" style={this.getProgressStyle()} /> */}
          <input
            className="range-input"
            value={fromPrice}
            data-label="fromPrice"
            onChange={this.handleChange}
            step={step}
            min={min}
            max={max}
            type="range"
          />
          <input
            className="range-input"
            value={toPrice}
            data-label="toPrice"
            onChange={this.handleChange}
            step={step}
            min={min}
            max={max}
            type="range"
          />
          <div className="rangeSlider__prise">
            <div>{fromPrice}</div>
            <div>{toPrice}</div>
          </div>
        </section>
        {/* <div
          className="wc-block-price-filter__range-input-wrapper"
        >
          <div className="wc-block-price-filter__range-input-progress" style={this.getProgressStyle()} />
          <input
            type="range"
            className="wc-block-price-filter__range-input wc-block-price-filter__range-input--min"
            onChange={this.handleChange}
            value={currentMin || 0}
            step={step}
            min={min}
            max={max}
            data-label="currentMax"
          />
          <input
            type="range"
            className="wc-block-price-filter__range-input wc-block-price-filter__range-input--max"
            onChange={this.handleChange}
            value={currentMax || 0}
            step={step}
            min={min}
            max={max}
            data-label="currentMin"
          />
        </div> */}

        {/* <div
          className="wc-block-price-filter__range-input-wrapper"
        >
          <div className="wc-block-price-filter__range-input-progress" style={this.getProgressStyle()} />
          <input
            type="range"
            className="range-input"
            onChange={this.handleChange}
            value={currentMin || 0}
            step={step}
            min={min}
            max={max}
            data-label="currentMax"
          />
          <input
            type="range"
            className="range-input"
            onChange={this.handleChange}
            value={currentMax || 0}
            step={step}
            min={min}
            max={max}
            data-label="currentMin"
          />
        </div> */}
      </>
    );
  }
}

export default PriceRangeSlider;
// export default connect(({ reducerFilter: { price } }) => ({ priceRange: price }))(PriceRangeSlider);
