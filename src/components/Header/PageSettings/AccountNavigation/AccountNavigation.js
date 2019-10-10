import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
export const CN = 'navigation-account';

const AccountNavigation = (props) =>
  <div className={cx(CN)}>
    <Link to={'/404'}>
      <span>my account</span>
    </Link>
    <Link to={'/wishlist'}>
      <span>wishlist</span>
    </Link>
    <Link to={'/404'}>
      <span>checkout</span>
    </Link>
    <Link to={'/404'}>
      <span>log in</span>
    </Link>
  </div>;

AccountNavigation.propTypes = {
  className: PropTypes.string,
};

export default AccountNavigation;
