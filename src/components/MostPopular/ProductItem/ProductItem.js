import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductItem.scss';

const CN = 'product';

const ProductItem = ({ product, addToCart }) => {
  const [isHovered, setHovered] = useState(false);
  const {
    id,
    image,
    label,
    title,
    price,
    sizes
  } = product;

  const handleClick = () => {
    addToCart(id);
  };

  const renderView = () => (
    <>
      <div className={cx(`${CN}__img-wrapper`, { [`${CN}__img-wrapper--hovered`]: isHovered })}>
        {!isHovered && (
          <>
            <div className={cx(`${CN}__img-wrapper__flag`, label)} />
            <div className={`${CN}__img-wrapper__labels`}>{label}</div>
          </>
        )}

        <img
          alt="product"
          className={cx(`${CN}__img-wrapper__img`, { [`${CN}__img-wrapper__img--hovered`]: isHovered })}
          src={image}
        />
      </div>

      <div className={cx(`${CN}__title-wrapper`, { [`${CN}__title-wrapper__title`]: isHovered })}>
        <h2 className={cx(`${CN}__title-wrapper__title`, { [`${CN}__title-wrapper__title--hovered`]: isHovered })}>
          {title}
        </h2>

        {!isHovered && <h3 className={`${CN}__title-wrapper__price`}>{price}</h3>}
        {isHovered && (
          <>
            <span className="sizes">
            Sizes:
              {' '}
              {sizes}
            </span>
            <div className={`{${CN}__title-wrapper icons`}>
              <i className="eye icon" />
              <i className="cart plus icon" onClick={handleClick} />
              <i className="heart outline icon" />
            </div>
          </>
        )}
      </div>
    </>
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={`${CN} col-xs-12 col-sm-6 col-md-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderView()}
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired
  }).isRequired
};

export default ProductItem;
