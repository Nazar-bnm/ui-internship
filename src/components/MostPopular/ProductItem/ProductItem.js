import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import cx from 'classnames';

const CN = 'product';
const ProductItem = ({ product }) => {
  const [isHovered, setHovered] = useState(false);
  const { image, label, title, price } = product;

  const renderDefaultView = (isHovered) => (
    <Fragment>
      <div className={cx(`${CN}__img-wrapper`, { [`${CN}__img-wrapper--hovered`]: isHovered })}>
        <div
          className={cx(`${CN}__img-wrapper__flag`, { red: (label === 'sale') },
            { black: (label === 'new' ) })}
        />
        <div className={`${CN}__img-wrapper__labels`}>{label}</div>
        {/* {!isHovered && <div className={`${CN}__img-wrapper__labels`}>{label}</div>} */}
        <img className={`${CN}__img-wrapper__img`} src={image}/>
      </div>
      <div className={cx(`${CN}__title-wrapper`)}>
        <h2 className={`${CN}__title-wrapper__title`}>{title}</h2>
        <h3 className={`${CN}__title-wrapper__price`}>{price}</h3>
      </div>
    </Fragment>
  );

  const renderHoveredView = () => (
    <Fragment>
      <div className={`${CN}__img-wrapper ${CN}__img-wrapper--hovered`}>
        <img className={`${CN}__img-wrapper__img ${CN}__img-wrapper__img--hovered`} src={image}/>
      </div>
      <div className={cx(`${CN}__title-wrapper`)}>
        <h2 className={`${CN}__title-wrapper__title ${CN}__title-wrapper__title--hovered`}>{title}</h2>
        <span className='sizes'>Sizes: S - M - L </span>
        <div className={`{${CN}__title-wrapper icons`}>
          <i className="eye icon"></i>
          <i className="cart plus icon"></i>
          <i className="heart outline icon"></i>
        </div>
      </div>
    </Fragment>
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={`${CN} col-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? renderHoveredView(isHovered) : renderDefaultView()}
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
