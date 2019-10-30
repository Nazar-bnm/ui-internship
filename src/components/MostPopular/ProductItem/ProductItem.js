import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal';
import ProductImage from '../../ProductImage';
import ProductOrder from '../../ProductOrder';
import Heading from '../../Heading';
import { defaultImages } from '../../../constants';
import { productOrderParameters } from '../../../config/ProductOrderMockups';

import './ProductItem.scss';

const CN = 'product';

const ProductItem = (props) => {
  const [isHovered, setHovered] = useState(false);
  const [isShowedModal, setShowModal] = useState(false);
  const {
    item, wishlist, addToWishlist, removeFromWishlist, showMessage
  } = props;
  const {
    _id, images, label, title, price, sizes
  } = item;

  const notificationTypeEnum = {
    removedFromWishlistNotif: {
      title: 'info',
      message: 'The item removed from the wishlist',
      type: 'info'
    },
    addedItemNotif: {
      title: 'success',
      message: 'The item added to the wishlist',
      type: 'success'
    }
  };

  const audio = new Audio('src/assets/sounds/notification-sound.mp3');

  const playAudio = () => {
    audio.play();
  };

  const showModal = () => setShowModal(true);
  const removeModal = () => {
    setShowModal(false);
    setHovered(false);
  };

  const addToWishlistWithNotif = () => {
    addToWishlist(_id);
    showMessage(notificationTypeEnum.addedItemNotif);
    playAudio();
  };

  const removeFromWishlistNotif = () => {
    removeFromWishlist(_id);
    showMessage(notificationTypeEnum.removedFromWishlistNotif);
    playAudio();
  };


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
          onClick={() => removeFromWishlistNotif(_id)}
        >
          <i className="icon heart red large" />
        </button>
      );
    }

    return (
      <button
        type="button"
        className="product__button"
        onClick={() => addToWishlistWithNotif(_id)}
      >
        <i className="icon heart outline large product__icon" />
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
              <i className="eye icon product__icon" onClick={showModal} />
              {isShowedModal && (
                <Modal className={`${CN}-quick-view`} removeModal={removeModal}>
                  <Heading title="Quick view" />
                  <div className={`${CN}-quick-view-content`}>
                    <ProductImage images={defaultImages} />
                    <div className={`${CN}-quick-view-content__wrapper`}>
                      <ProductOrder {...productOrderParameters} />
                      <NavLink
                        to={`/product-page/${_id}`}
                        className={`${CN}-quick-view-content__link`}
                      >
                  See more details
                      </NavLink>
                    </div>
                  </div>
                </Modal>
              )}
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
  _id: PropTypes.string,
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
  images: PropTypes.array,
  showMessage: PropTypes.func.isRequired
};

ProductItem.defaultProps = {
  wishlist: [],
  images: ['wjeans-4-4']
};

export default ProductItem;
