import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductItem.scss';

const CN = 'product';

const ProductItem = ({
  product, wishlist, addToWishlist, removeFromWishlist
}) => {
  const [isHovered, setHovered] = useState(false);

  const {
    id,
    image,
    label,
    title,
    price,
    sizes
  } = product;

  const renderButton = () => {
    const isInWishlist = wishlist && wishlist.find((wishedItemId) => id === wishedItemId);

    if (isInWishlist) {
      return (
        <button
          type="button"
          className="product__button"
          onClick={() => removeFromWishlist(id)}
        >
          <i className="icon heart red large" />
        </button>
      );
    }

    return (
      <button
        type="button"
        className="product__button"
        onClick={() => addToWishlist(id)}
      >
        <i className="icon heart outline large" />
      </button>
    );
  };

  const renderView = () => (
    <>
      <div className={cx(`${CN}__img-wrapper`, { [`${CN}__img-wrapper--hovered`]: isHovered })}>
        <div className={cx(`${CN}__img-wrapper__flag`, label)} />
        <div className={`${CN}__img-wrapper__labels`}>{label}</div>

        <img
          className={cx(`${CN}__img-wrapper__img`, { [`${CN}__img-wrapper__img--hovered`]: isHovered })}
          alt="product"
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
            <span className={`${CN}__title-wrapper`}>
              {`Sizes: ${sizes}`}
            </span>
            <div className={`${CN}__title-wrapper icons`}>
              <i className="eye icon" />
              <div>{renderButton()}</div>
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
      className={`${CN} slide`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderView()}
    </div>
  );
};

const itemPropsTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  sizes: PropTypes.string
};

ProductItem.propTypes = {
  product: PropTypes.shape(itemPropsTypes).isRequired,
  wishlist: PropTypes.array,
  addToWishlist: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired
};

ProductItem.defaultProps = {
  wishlist: []
};

export default ProductItem;
