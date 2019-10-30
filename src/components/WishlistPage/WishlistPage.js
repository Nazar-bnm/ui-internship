import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import WishlistItem from './WishlistItem';

import './WishlistPage.scss';

const CN = 'wishlist';

const WishlistPage = (props) => {
  const {
    wishlist, products, removeFromWishlist, className, showMessage
  } = props;

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

  const renderWishlistPage = () => (
    products && wishlist.length ? (products.map((item) => {
      if (wishlist.includes(item._id)) {
        return (
          <WishlistItem
            key={item._id}
            item={item}
            removeFromWishlist={removeFromWishlist}
            showMessage={showMessage}
          />
        );
      }
    }))
      : renderNoWishlistItems()
  );

  return (
    <div className={cx(CN, className)}>
      <div className={`${CN} content`}>
        <h1 className={`${CN}__title`}>Wishlist</h1>
      </div>
      <div className={`${CN} content`}>
        {renderWishlistPage()}
      </div>
    </div>
  );
};

WishlistPage.propTypes = {
  wishlist: PropTypes.array,
  products: PropTypes.array,
  removeFromWishlist: PropTypes.func.isRequired,
  className: PropTypes.string,
  showMessage: PropTypes.func.isRequired
};

WishlistPage.defaultProps = {
  className: '',
  wishlist: [],
  products: []
};

export default WishlistPage;
