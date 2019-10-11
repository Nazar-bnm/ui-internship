import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import cx from 'classnames';

const CN = 'product';
const ProductItem = ({ product }) => {
  const [isHovered, setHovered] = useState(false);
  const { image, label, title, price, sizes } = product;

  const renderView = (isHovered) => (
    <Fragment>
      <div className={cx(`${CN}__img-wrapper`, { [`${CN}__img-wrapper--hovered`]: isHovered })}>
        {!isHovered && (
          <>
            <div className={cx(`${CN}__img-wrapper__flag`, label)}/>
            <div className={`${CN}__img-wrapper__labels`}>{label}</div>
          </>
        )}

        <img
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
            <span className='sizes'>Sizes: {sizes}</span>
            <div className={`{${CN}__title-wrapper icons`}>
              <i className="eye icon" />
              <i className="cart plus icon" />
              <i className="heart outline icon" />
            </div>
          </>
        )}
      </div>
    </Fragment>
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={`${CN} col-xs-12 col-sm-6 col-md-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderView(isHovered)}
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
