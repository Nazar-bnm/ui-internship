import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import Modal from '../../Modal';
import ProductImage from '../../ProductImage';
import ProductOrder from '../../ProductOrder';
import Heading from '../../Heading';
import {
  REMOVED_FROM_WISHLIST_NOTIFICATION,
  ADDED_TO_WISHLIST_NOTIFICATION
} from '../../../constants/notificationData';

import './ProductItem.scss';

const CN = 'product';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isShowedModal: false,
      productFirstImage: `${process.env.IMAGE_URL}/${props.product.images[0].claudinaryId}`,
      errored: false
    };

    this.showModal = this.showModal.bind(this);
    this.removeModal = this.removeModal.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.addToWishlistWithNotification = this.addToWishlistWithNotification.bind(this);
    this.removeFromWishlistNotification = this.removeFromWishlistNotification.bind(this);
    this.renderWishlistButton = this.renderWishlistButton.bind(this);
    this.renderQuickView = this.renderQuickView.bind(this);
    this.renderHoverView = this.renderHoverView.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  showModal() {
    this.setState({
      isShowedModal: true
    });
  }

  removeModal() {
    this.setState({
      isHovered: false,
      isShowedModal: false
    });
  }

  handleMouseEnter() {
    this.setState({
      isHovered: true
    });
  }

  handleMouseLeave() {
    const { isShowedModal } = this.state;

    !isShowedModal
      && this.setState({
        isHovered: false
      });
  }

  addToWishlistWithNotification() {
    const {
      product: { _id },
      addToWishlist,
      showMessage
    } = this.props;

    addToWishlist(_id);
    showMessage(ADDED_TO_WISHLIST_NOTIFICATION);
  }

  removeFromWishlistNotification() {
    const {
      product: { _id },
      removeFromWishlist,
      showMessage
    } = this.props;

    removeFromWishlist(_id);
    showMessage(REMOVED_FROM_WISHLIST_NOTIFICATION);
  }

  handleImageError() {
    const { errored } = this.state;
    if (!errored) {
      this.setState({
        productFirstImage: 'src/assets/img/productListPage/placeholder-image.jpeg',
        errored: true
      });
    }
  }

  renderWishlistButton() {
    const {
      wishlist,
      product: { _id }
    } = this.props;

    const isInWishlist = wishlist && wishlist.find((wishedItemId) => _id === wishedItemId);

    const removeOrAddToWishlist = () => (isInWishlist
      ? this.removeFromWishlistNotification(_id)
      : this.addToWishlistWithNotification(_id));

    return (
      <i
        className={cx('product__icon', 'icon', 'heart', 'large', {
          red: isInWishlist,
          outline: !isInWishlist
        })}
        onClick={removeOrAddToWishlist}
      />
    );
  }

  renderQuickView() {
    const {
      product: {
        images,
        _id
      }
    } = this.props;

    const imagesForQuickView = images.map(({ claudinaryId }) => ({
      src: `${process.env.IMAGE_URL}/${claudinaryId}`
    }));

    return (
      <Modal className={`${CN}-quick-view`} removeModal={this.removeModal}>
        <Heading title="Quick view" />
        <div className={`${CN}-quick-view-content`}>
          <ProductImage
            className={`${CN}-quick-view-content-images`}
            onError={this.handleImageError}
            images={imagesForQuickView}
            verticalCarousel
          />
          <div className={`${CN}-quick-view-content-wrapper`}>
            <ProductOrder
              className={`${CN}-quick-view-content__product-order`}
              id={_id}
            />
            <NavLink
              to={`/product-details/${_id}`}
              className={`${CN}-quick-view-content__link`}
            >
              See more details
            </NavLink>
          </div>
        </div>
      </Modal>
    );
  }

  renderHoverView() {
    const { productFirstImage } = this.state;
    const {
      product: {
        _id, label, title, price, sizes
      }
    } = this.props;
    const sizesWithSpaces = sizes.join(', ');
    const { isHovered, isShowedModal } = this.state;

    return (
      <>
        <NavLink to={`/product-details/${_id}`}>
          <div
            className={cx(`${CN}__img-wrapper`, {
              [`${CN}__img-wrapper--hovered`]: isHovered
            })}
          >
            <div className={cx(`${CN}__img-wrapper__flag`, label)} />
            <div className={`${CN}__img-wrapper__labels`}>{label}</div>

            <img
              alt="product"
              className={cx(`${CN}__img-wrapper__img`, {
                [`${CN}__img-wrapper__img--hovered`]: isHovered
              })}
              onError={this.handleImageError}
              src={productFirstImage}
            />
          </div>
        </NavLink>
        <div
          className={cx(`${CN}__title-wrapper`, {
            [`${CN}__title-wrapper__title`]: isHovered
          })}
        >
          <NavLink
            className={cx(`${CN}__title-wrapper-link`)}
            to={`/product-details/${_id}`}
          >
            <h2
              className={cx(`${CN}__title-wrapper-link__title`, {
                [`${CN}__title-wrapper-link__title--hovered`]: isHovered
              })}
            >
              {title}
            </h2>
          </NavLink>
          {!isHovered && (
            <h3 className={`${CN}__title-wrapper__price`}>{`$${price}`}</h3>
          )}
          {isHovered && (
            <>
              <span className={`${CN}__title-wrapper`}>
                {`Sizes: ${sizesWithSpaces}`}
              </span>
              <div className={`${CN}__title-wrapper icons`}>
                {window.innerWidth > 720 && (
                  <i
                    className="eye icon product__icon"
                    onClick={this.showModal}
                  />
                )}
                {this.renderWishlistButton()}
              </div>
              {isShowedModal && this.renderQuickView()}
            </>
          )}
        </div>
      </>
    );
  }

  render() {
    return (
      <div
        className={`${CN} slide`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.renderHoverView()}
      </div>
    );
  }
}

const ItemShape = PropTypes.shape({
  _id: PropTypes.string,
  images: PropTypes.array,
  label: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.array
});

ProductItem.propTypes = {
  product: ItemShape.isRequired,
  wishlist: PropTypes.array,
  addToWishlist: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired
};

ProductItem.defaultProps = {
  wishlist: []
};

export default ProductItem;
