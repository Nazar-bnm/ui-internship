import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
export const CN = 'navigation-account';

const AccountNavigation = (props) => {
  return (
    <div className={cx(CN)}>
      <Link to={'/404'}>
        <span>my account</span>
      </Link>
      <Link to={'/404'}>
        <span>wish list</span>
      </Link>
      <Link to={'/404'}>
        <span>checkout</span>
      </Link>
      <Link to={'/404'}>
        <span>log in</span>
      </Link>
    </div>
  );
};

AccountNavigation.propTypes = {
  grid: PropTypes.string,
  className: PropTypes.string,
};

export default AccountNavigation;
