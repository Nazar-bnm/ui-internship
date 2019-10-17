import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './WishlistItem.scss';

const CN = 'wishlist-item';

const WishlistItem = ({ className, item, removeFromWishlist }) => {
  const {
    image, title, collection, category
  } = item;

  return (
    <div className={`${cx(CN, className)}`}>
      <img className={`${CN}__image`} src={image} alt={title} />
      <h3 className={`${CN}__title`}>{title}</h3>
      <h4 className={`${CN}__subtitle`}>{collection}</h4>
      <h4 className={`${CN}__subtitle`}>{category}</h4>
      <button type="button" className={`${CN}__button`}>
        <div className="col-2"><i className="cart small icon" /></div>
        <div className="col-8 col-right"><h4>Add to cart</h4></div>
      </button>
      <button
        type="button"
        className={`${CN}__button ${CN}__button--remove`}
        onClick={() => removeFromWishlist(item)}
      >
        <div className="col-2"><i className="icon trash alternate small" /></div>
        <div className="col-8 col-right"><h4>Remove from wishlist</h4></div>
      </button>
    </div>
  );
};

WishlistItem.propTypes = {
  item: propTypes.shape({
    image: propTypes.string,
    title: propTypes.string,
    collection: propTypes.string,
    category: propTypes.string
  }).isRequired,
  removeFromWishlist: propTypes.func.isRequired,
  className: propTypes.string
};

WishlistItem.defaultProps = {
  className: ''
};

export default WishlistItem;
