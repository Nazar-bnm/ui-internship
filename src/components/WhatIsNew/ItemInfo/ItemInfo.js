import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ItemInfo.scss';

const ItemInfo = ({ item, className }) => {
  const {
    photo,
    title,
    collection,
    category
  } = item;

  return (
    <div className={cx('col-4', 'item', className)}>
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
  item: PropTypes.object.isRequired,
  className: PropTypes.string
};

ItemInfo.defaultProps = {
  className: ''
};

export default ItemInfo;
