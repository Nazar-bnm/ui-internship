import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductItem.scss';

const CN = 'product';

const ProductItem = ({
  item, wishlist, addToWishlist, removeFromWishlist
}) => {
  const [isHovered, setHovered] = useState(false);
  const {
    _id, images, label, title, price, sizes
  } = item;

  if (!images[0]) {
    images[0] = 'wjeans-4-4';
  }

  const imageSrc = `${process.env.IMAGE_URL}/${images[0].claudinaryId}`;

  const renderButton = () => {
    const isInWishlist = wishlist && wishlist.find((wishedItemId) => _id === wishedItemId);

    if (isInWishlist) {
      return (
        <button
          type="button"
          className="product__button"
          onClick={() => removeFromWishlist(_id)}
        >
          <i className="icon heart red large" />
        </button>
      );
    }

    return (
      <button
        type="button"
        className="product__button"
        onClick={() => addToWishlist(_id)}
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
          alt="product"
          className={cx(`${CN}__img-wrapper__img`, { [`${CN}__img-wrapper__img--hovered`]: isHovered })}
          src={imageSrc}
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

const ItemShape = PropTypes.shape({
  id: PropTypes.number,
  images: PropTypes.array,
  label: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.array
});

ProductItem.propTypes = {
  item: ItemShape.isRequired,
  wishlist: PropTypes.array,
  addToWishlist: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  images: PropTypes.array
};

ProductItem.defaultProps = {
  wishlist: [],
  images: ['wjeans-4-4']
};

export default ProductItem;
