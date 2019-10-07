import React, { Component } from 'react';
import './ProductImage.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const CN = 'product-image';

class ProductImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: '',
    };
  }

  clickHandler = (e) => {
    const selectedImage = e.currentTarget.dataset.src;
    // eslint-disable-next-line no-invalid-this
    this.setState({
      selectedImage,
    });
  }

  renderSmallImages = (selectedImage) => {
    // eslint-disable-next-line no-invalid-this
    const { imagesArr } = this.props;
    return imagesArr.map((el, index) => {
      if (!index) return null;
      // eslint-disable-next-line no-unused-vars
      let imageClass = '';

      if (selectedImage === el.src) {
        imageClass = `${CN}__selected-image`;
      }
      const isSelected = selectedImage === el.src;
      return (
        // eslint-disable-next-line no-invalid-this
        <figure key={el.src} data-src={el.src} className={`${CN}__small-image`} onClick={this.clickHandler}>
          <img src={el.src} className={cx(CN, { 'product-image__selected-image': isSelected })} />
          <div className={`${CN}__image-on-hover`}></div>
        </figure>
      );
    });
  }

  render() {
    const { imagesArr } = this.props;
    const { selectedImage } = this.state;
    const bigImageSrc = imagesArr[0].src;
    let imageClass = '';
    if (selectedImage === bigImageSrc) imageClass = 'product-image__selected-image';

    return (
      <div className={cx(`${CN}__container`)}>
        <figure className={`${CN}__big-image-container`} onClick={this.clickHandler} data-src={bigImageSrc}>
          <img src={bigImageSrc} className={`${CN} ${imageClass}`} />
          <div className={`${CN}__image-on-hover`}></div>
        </figure>
        <div className={`${CN}__small-images-container`}>
          {this.renderSmallImages(selectedImage)}
        </div>
      </div>
    );
  }
}

ProductImage.propTypes = {
  imagesArr: PropTypes.array,
  className: PropTypes.string,
};

export default ProductImage;
