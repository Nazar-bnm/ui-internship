import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ decrement, increment, count }) => (
  <div>
    <h2>Counter</h2>
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  </div>
);

Counter.propTypes= {
  count: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default Counter;
