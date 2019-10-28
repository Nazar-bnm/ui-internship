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
    image, label, title, price, sizes
  } = product;

  const handleRemove = (item) => () => removeFromWishlist(item);
  const handleAdd = (item) => () => addToWishlist(item);

  const renderButton = () => {
    const isInWishlist = wishlist && wishlist.find((item) => item.id === product.id);

    if (isInWishlist) {
      return (
        <button
          type="button"
          className="product__button"
          onClick={handleRemove(product)}
        >
          <i className="icon heart red large" />
        </button>
      );
    }

    return (
      <button
        type="button"
        className="product__button"
        onClick={handleAdd(product)}
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
              <div>{renderButton(product)}</div>
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

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    sizes: PropTypes.string
  }).isRequired,
  wishlist: PropTypes.array,
  addToWishlist: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired
};

ProductItem.defaultProps = {
  wishlist: []
};

export default ProductItem;
