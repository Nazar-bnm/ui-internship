import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductItem.scss';
import cx from 'classnames';
// import { Transition } from 'react-transition-group';

const CN = 'product';
const ProductItem = ({ product }) => {
  const [isHovered, setHovered] = useState(false);
  const { image, label, title, price } = product;

  const renderView = (isHovered) => (
    <Fragment>
      <div className={cx(`${CN}__img-wrapper`, { [`${CN}__img-wrapper--hovered`]: isHovered })}>
        {!isHovered && <div className={cx(`${CN}__img-wrapper__flag`, { red: (label === 'sale') },
          { black: (label === 'new' ) })}/>}
        {!isHovered && <div className={`${CN}__img-wrapper__labels`}>{label}</div>}
        <img className={cx(`${CN}__img-wrapper__img`,
          { [`${CN}__img-wrapper__img--hovered`]: isHovered })} src={image}/>
      </div>
      <div className={cx(`${CN}__title-wrapper`,
        { [`${CN}__title-wrapper__title`]: isHovered })}>
        <h2 className={cx(`${CN}__title-wrapper__title`,
          { [`${CN}__title-wrapper__title--hovered`]: isHovered })}>{title}</h2>
        {!isHovered && <h3 className={`${CN}__title-wrapper__price`}>{price}</h3>}
        {isHovered && <span className='sizes'>Sizes: S - M - L </span>}
        {isHovered && <div className={`{${CN}__title-wrapper icons`}>
          <i className="eye icon"></i>
          <i className="cart plus icon"></i>
          <i className="heart outline icon"></i>
        </div>}
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
