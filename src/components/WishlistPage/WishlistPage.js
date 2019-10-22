import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import WishlistItem from './WishlistItem';

import './WishlistPage.scss';

const CN = 'wishlist';

const WishlistPage = ({ wishlist, removeFromWishlist, className }) => {
  const renderNoWishlistItems = () => (
    <div className={`${CN} ${CN}__empty-page`}>
      <h2 className={`${CN}__subtitle`}>No items in your wishlist!</h2>
      <img
        className={`${CN}__image col-6 col-center"`}
        alt="no cart items"
        src="src/assets/img/content/img-no-cartitems.png"
      />
    </div>
  );

  return (
    <div className={cx(CN, className)}>
      <div className={`${CN} content`}>
        <h1 className={`${CN}__title`}>Wishlist</h1>
      </div>
      <div className={`${CN} content`}>
        {wishlist.length ? (wishlist.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            removeFromWishlist={removeFromWishlist}
          />
        )))
          : renderNoWishlistItems()}
      </div>
    </div>
  );
};

WishlistPage.propTypes = {
  wishlist: PropTypes.array,
  removeFromWishlist: PropTypes.func.isRequired,
  className: PropTypes.string
};

WishlistPage.defaultProps = {
  className: '',
  wishlist: []
};

export default WishlistPage;
