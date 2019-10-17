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

  getBigImageSrc() {
    const { selectedImage } = this.state;
    const { imagesArr } = this.props;
    if (selectedImage === '') {
      return imagesArr[0].src;
    }

    return selectedImage;
  }

  clickHandler = (event) => {
    const selectedImage = event.target.dataset.src;

    this.setState({
      selectedImage
    });
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
        >
          <img
            className={cx(CN, { 'product-image__selected-image': isSelected })}
            alt="product"
            src={src}
          />
          <button
            className={`${CN}__image-on-hover`}
            data-src={src}
            onClick={this.clickHandler}
            type="submit"
            label="x"
          />
        </div>
      );
    });
  }

  render() {
    const { selectedImage } = this.state;

    return (
      <div className={cx(`${CN}__container content`)}>
        <div
          className={`${CN}__big-image-container`}
          type="submit"
        >
          <img
            alt="product"
            className={CN}
            src={this.getBigImageSrc()}
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
