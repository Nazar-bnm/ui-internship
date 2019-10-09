/* eslint-disable no-invalid-this */
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

  clickHandler = (selectedImage) => {
    this.setState({
      selectedImage,
    });
  }

  renderBigImage = () => {
    const { selectedImage } = this.state;
    const { imagesArr } = this.props;
    if (selectedImage === '') {
      return imagesArr[0].src;
    }
    return selectedImage;
  }

  renderSmallImages = (selectedImage) => {
    const { imagesArr } = this.props;
    return imagesArr.map((el) => {
      const { src } = el;
      const isSelected = selectedImage === src;

      return (
        <figure key={src} className={`${CN}__small-image`} onClick={() => this.clickHandler(src)}>
          <img src={src} className={cx(CN, { 'product-image__selected-image': isSelected })} />
          <div className={`${CN}__image-on-hover`}></div>
        </figure>
      );
    });
  }

  render() {
    const { selectedImage } = this.state;

    return (
      <div className={cx(`${CN}__container`)}>
        <figure className={`${CN}__big-image-container`} onClick={() => this.clickHandler(this.renderBigImage())}>
          <img src={this.renderBigImage()} className={CN} />
        </figure>
        <div className={`${CN}__small-images-container`}>
          {this.renderSmallImages(selectedImage)}
        </div>
      </div>
    );
  }
}

ProductImage.propTypes = {
  imagesArr: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
};

ProductImage.defaultProps = {
  imagesArr: [
    { src: 'src/assets/img/content/new1.png' },
    { src: 'src/assets/img/content/new2.png' },
    { src: 'src/assets/img/content/new3.png' },
    { src: 'src/assets/img/content/new4.png' },
  ],
};

export default ProductImage;
