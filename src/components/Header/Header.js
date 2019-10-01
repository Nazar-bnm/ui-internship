import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
        <li>
          <Link to="/products">Product List Page</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
