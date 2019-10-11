import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';

import WishlistItem from './WishlistItem';

import './WishlistPage.scss';

const CN = 'wishlist';

const WishlistPage =({ wishlist, removeFromWishlist }) => {
  const renderProduct = (item, removeFromWishlist) => {
    return (
      <WishlistItem key={item.id} item={item} removeFromWishlist={removeFromWishlist}/>
    );
  };

  const renderNoWishlistItems = () => {
    return (
      <div className={`${cx(CN)} ${CN}__empty-page`}>
        <h2 className={`${CN}__subtitle`}>No items in your wishlist!</h2>
        <img className={`${CN}__image col-6 col-center"`}
          alt="no cart items"
          src="src/assets/img/content/img-no-cartitems.png"/>
      </div>
    );
  };

  return (
    <div>
      <div className={`${cx(CN)} content`}>
        <h1 className={`${CN}__title`}>Wishlist</h1>
      </div>
      <div className={`${cx(CN)} content`}>
        {wishlist.length ? wishlist.map((item) => renderProduct(item, removeFromWishlist)) :
          renderNoWishlistItems()}
      </div>
    </div>
  );
};

WishlistPage.propTypes = {
  wishlist: propTypes.array,
  removeFromWishlist: propTypes.func,
};

export default WishlistPage;
