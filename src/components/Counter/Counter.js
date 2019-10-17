import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ decrement, increment, count }) => (
  <div>
    <h2>Counter</h2>
    <div>
      <button type="button" onClick={decrement}>-</button>
      <span>{count}</span>
      <button type="button" onClick={increment}>+</button>
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default Counter;
