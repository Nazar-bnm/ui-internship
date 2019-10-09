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
      <h3 className={`${cx(CN)}__title`}>{title}</h3>
      <h4 className={`${cx(CN)}__subtitle`}>{collection}</h4>
      <h4 className={`${cx(CN)}__subtitle`}>{category}</h4>
      <button className={`${CN}__button`}>
        <div className="col-2"><i className="cart small icon"></i></div>
        <div className="col-8 col-right"><h4>Add to cart</h4></div>
      </button>
      <button className={`${CN}__button ${CN}__button--remove`}>
        <div className="col-2"><i className="icon trash alternate small"></i></div>
        <div className="col-8 col-right"><h4>Remove from wishlist</h4></div>
      </button>
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
