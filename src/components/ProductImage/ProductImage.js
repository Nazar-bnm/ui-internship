import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductImage.scss';

export const CN = 'product-image';

class ProductImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: ''
    };
  }

  clickHandler(selectedImage) {
    this.setState({
      selectedImage
    });
  }

  renderBigImage() {
    const { selectedImage } = this.state;
    const { imagesArr } = this.props;
    if (selectedImage === '') {
      return imagesArr[0].src;
    }

    return selectedImage;
  }

  renderSmallImages(selectedImage) {
    const { imagesArr } = this.props;

    return imagesArr.map((el) => {
      const { src } = el;
      const isSelected = selectedImage === src;

      return (
        <div
          className={`${CN}__small-image`}
          key={src}
          onClick={() => this.clickHandler(src)}
        >
          <img
            className={cx(CN, { 'product-image__selected-image': isSelected })}
            alt="product"
            src={src}
          />
          <div className={`${CN}__image-on-hover`} />
        </div>
      );
    });
  }

  render() {
    const { selectedImage } = this.state;

    return (
      <div className={cx(`${CN}__container`)}>
        <div className={`${CN}__big-image-container`} onClick={() => this.clickHandler(this.renderBigImage())}>
          <img
            className={CN}
            alt="product"
            src={this.renderBigImage()}
          />
        </div>
        <div className={`${CN}__small-images-container`}>
          {this.renderSmallImages(selectedImage)}
        </div>
      </div>
    );
  }
}

ProductImage.propTypes = {
  imagesArr: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string
  }))
};

ProductImage.defaultProps = {
  imagesArr: []
};

export default ProductImage;
