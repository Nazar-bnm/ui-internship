import React from 'react';
import PropTypes from 'prop-types';

const AccountNavigation = (props) => {
  return (
    <div className="navigation-right">
      <span>my account</span>
      <span>wish list</span>
      <span>checkout</span>
      <span>log in</span>
    </div>
  );
};

AccountNavigation.propTypes = {
  grid: PropTypes.string,
};

export default AccountNavigation;
