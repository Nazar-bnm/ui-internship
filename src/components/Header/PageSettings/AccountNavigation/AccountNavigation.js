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
      <span>wishlist</span>
    </Link>
    <Link to="/not_found">
      <span>checkout</span>
    </Link>
    <Link to="/not_found">
      <span>log in</span>
    </Link>
  </div>
);

export default AccountNavigation;
