import React from 'react';
import PropTypes from 'prop-types';
import './ItemInfo.scss';

const ItemInfo = ({ el }) => {
  const { photo, title, collection, category } = el;
  return (
    <div className="col-4 wrapper-item">
      <div className="wrapper-img">
        <img className="img" src={photo}/>
        <span className="category">shop {category}</span>
      </div>
      <div className="wrapper-text">
        <h4 className="item-title">{title}</h4>
        <span className='collection'>{collection}</span>
      </div>
    </div>
  );
};

ItemInfo.propTypes = {
  el: PropTypes.object,
};

export default ItemInfo;
