import React, { Component } from 'react';

import './PriceRangeSlider.scss';

class PriceRangeSlider extends Component {
  constructor(props) {
    super(props);
    const { priceRange, setPriceRange } = this.props;

    this.state = {
      from: priceRange.from,
      to: priceRange.to,
    }
  }

  handleChange1 = () => {
    const { setPriceRange } = this.props;
    const {from, to} = this.state;


    this.setState({from: parseFloat(event.target.value)});
    setPriceRange(from, to);
  };

  handleChange2 = () => {
    const { setPriceRange } = this.props;
    const {from, to} = this.state;

    this.setState({to: parseFloat(event.target.value)});
    setPriceRange(from, to);
  };

  render() {
    const {from, to} = this.state;
    // const { from, to } = this.props.priceRange;

    console.log(this.props);
    return (
      <>
        <section className="rangeSlider">
          <input value={from} onChange={this.handleChange1} min="50" max="2000" step="50" type="range" />
          <input value={to} onChange={this.handleChange2} min="50" max="2000" step="50" type="range" />
          <div className="rangeSlider__prise">
            <div>{from}</div>
            <div>{to}</div>
          </div>
        </section>
      </>
    )
  }
}

export default PriceRangeSlider;
