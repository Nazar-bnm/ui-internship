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
      convertedPrice: 0
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
  }

  async componentDidMount() {
    this.getConvertedPrice();
  }

  componentDidUpdate(prevProps) {
    const { currencyKey } = this.props;
    if (currencyKey !== prevProps.currencyKey) {
      this.getConvertedPrice();
    }
  }

  getConvertedPrice() {
    const {
      product: {
        price
      }
    } = this.props;
    const { currencyKey } = this.props;
    const currencyPrice = (price * currencyKey).toFixed(0);
    this.setState({
      convertedPrice: currencyPrice
    });
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
          <ProductImage className={`${CN}-quick-view-content-images`} images={imagesForQuickView} verticalCarousel />
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
    const {
      product: {
        _id, images, label, title, price, sizes
      }, symbol
    } = this.props;
    const { convertedPrice } = this.state;
    const sizesWithSpaces = sizes.join(', ');

    const { isHovered, isShowedModal } = this.state;
    const imageSrc = images.length && `${process.env.IMAGE_URL}/${images[0].claudinaryId}`;

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
              src={imageSrc}
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
            <h3 className={`${CN}__title-wrapper__price`}>
              <>
                {symbol}
              </>
              {`${convertedPrice}`}

            </h3>
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
