import React from 'react';

import PropTypes from 'prop-types';
import './Slide.scss';

import cx from 'classnames';

export const CN = 'slide';

const Slide = ({ image, name, category }) => (
  <div className={cx(CN)}>
    <img
      className={`${CN}__image`}
      src={image}
      alt={name}
    />
    <h3 className={`${CN}__product-name title-sections`}>{name}</h3>
    <p className={`${CN}__category`}>{category}</p>
  </div>
);

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Slide;
