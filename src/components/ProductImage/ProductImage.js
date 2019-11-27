import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Carousel from '../Carousel';
import ProductImageItem from './ProductImageItem';

import './ProductImage.scss';

export const CN = 'product-image';

const visibleNumOfSlides = {
  desktop: 3,
  tablet: 3,
  mobile: 3
};

class ProductImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: '',
      errored: false
    };

    this.handleImageError = this.handleImageError.bind(this);
  }

  getBigImageSrc() {
    const { selectedImage } = this.state;
    const { images } = this.props;
    if (selectedImage === '') {
      return images[0].src;
    }

    return selectedImage;
  }

  clickHandler = ({ target }) => {
    const selectedImage = target.dataset.src;

    this.setState({
      selectedImage
    });
  };

  handleImageError() {
    const { errored } = this.state;
    if (!errored) {
      this.setState({
        selectedImage: 'src/assets/img/productListPage/placeholder-image.jpeg',
        errored: true
      });
    }
  }

  renderSmallImages() {
    const {
      images,
      verticalCarousel
    } = this.props;
    const { selectedImage } = this.state;

    const smallImages = images.map((el) => {
      const { src } = el;
      const isSelected = selectedImage === src;

      return (
        <ProductImageItem
          keyForChild={src}
          key={src}
          src={src}
          selectedImage
          isSelected={isSelected}
          clickHandler={this.clickHandler}
        />
      );
    });

    return (
      <Carousel
        className="carousel-image"
        visibleNumOfSlides={visibleNumOfSlides}
        vertical={verticalCarousel}
      >
        {smallImages}
      </Carousel>
    );
  }

  render() {
    const { selectedImage } = this.state;
    const { className } = this.props;

    return (
      <div className={cx(`${CN}__container`, className)}>
        {this.renderSmallImages(selectedImage)}
        <div className={`${CN}__big-image-container`} type="submit">
          <img
            alt="product"
            className={CN}
            src={this.getBigImageSrc()}
            onError={this.handleImageError}
          />
        </div>
      </div>
    );
  }
}

ProductImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string
    })
  ),
  className: PropTypes.string
};

ProductImage.defaultProps = {
  images: [],
  className: ''
};

export default ProductImage;
