import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';
import cx from 'classnames';

export const CN = 'slide';

const Slide = ({ image, name, category }) => (
  <div className = {cx(CN)}>
    <img className = {`${CN}__image`} src = {image} />
    <h3 className = {`${CN}__product-name title-sections`} >{name}</h3>
    <p className = {`${CN}__category`}>{category}</p>
  </div>
);

Slide.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default Slide;
