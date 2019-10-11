// REMOVE THIS BEFORE COMMITING!!!

import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ item }) => {
  const { id, photo, title, collection, category, price } = item;
  const imageStyle = {
    width: '100px',
    height: '120px',
  };

  const containerStyle = {
    width: '150px',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#FFDFD3',
  };

  const textStyle = {
    fontSize: '12px'
  };

  return (
    <div className="product-item__container" style={containerStyle}>
      <h4>{title}</h4>
      <img src={photo}
        style={imageStyle }></img>
      <p style={textStyle}>id: {id}</p>
      <p style={textStyle}>collection: {collection}</p>
      <p style={textStyle}>category: {category}</p>
      <p style={textStyle}>price: {price}</p>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
};

ProductItem.defaultProps = {
  item: {},
};

export default ProductItem;
