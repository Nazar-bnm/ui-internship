import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import './WishlistItem.scss';

const CN = 'wishlist-item';

const WishlistItem = ({ item }) => {
  const { photo, title, collection, category } = item;
  return (
    <div className={`${cx(CN)}`}>
      <img className={`${CN}__image`} src={photo} alt={title}></img>
      <h3>{title}</h3>
      <h4>{collection}</h4>
      <h4>{category}</h4>
      <button className={`${CN}__button`}>Add to cart</button>
    </div>
  );
};

WishlistItem.propTypes = {
  item: propTypes.object,
  photo: propTypes.string,
  title: propTypes.string,
  collection: propTypes.string,
  category: propTypes.string,
};

export default WishlistItem;
