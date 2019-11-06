import React from 'react';
import PropTypes from 'prop-types';

import './ItemInfo.scss';

const ItemInfo = ({ item }) => {
  const {
    photo,
    title,
    collection,
    category
  } = item;

  return (
    <div className="col-4 item">
      <div className="item__img-wrapper">
        <img className="item__img" alt={title} src={photo} />
        <span className="item__category">
          shop
          {category}
        </span>
      </div>
      <div className="item__title-wrapper">
        <h4 className="item__title">{title}</h4>
        <span className="item__collection">{collection}</span>
      </div>
    </div>
  );
};

ItemInfo.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemInfo;
