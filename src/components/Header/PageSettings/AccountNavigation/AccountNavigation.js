import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const CN = 'navigation-account';

const AccountNavigation = () => (
  <div className={cx(CN)}>
    <Link to="/not_found">
      <span>my account</span>
    </Link>
    <Link to="/wishlist">
      <span>wish list</span>
    </Link>
    <Link to="/cart">
      <span>cart</span>
    </Link>
    <Link to="/not_found">
      <span>log in</span>
    </Link>
  </div>
);

export default AccountNavigation;
