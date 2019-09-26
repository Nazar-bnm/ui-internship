import React from 'react';
import PropTypes from 'prop-types';


const AccountNavigation = (props) => {
  return (
    <div className={props.grid}>
      <span>my account</span>
      <span>wish list</span>
      <span>Checkout</span>
      <span>log in</span>
    </div>
  );
};

AccountNavigation.propTypes = {
  grid: PropTypes.string,
};

export default AccountNavigation;
