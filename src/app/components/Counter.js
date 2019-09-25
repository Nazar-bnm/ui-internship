import React from 'react';
const Counter = ({decrement, increment, count }) => {
    
return (
    <div>
        <h2>Counter</h2>
        <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </div>
    </div>
    )
}

export default Counter;
  