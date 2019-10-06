import React, { Component } from 'react';
import './ProductImage.scss';
import PropTypes from 'prop-types';

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
      let isSelected = '';

      if (selectedImage === el.src) {
        isSelected = 'selected';
      }
      return (
        // eslint-disable-next-line no-invalid-this
        <figure key={el.src} data-src={el.src} className="small-image" onClick={this.clickHandler}>
          <img src={el.src} className={`product-image ${isSelected}`} />
          <div className="image-on-hover"></div>
        </figure>
      );
    });
  }

  render() {
    const { imagesArr } = this.props;
    const { selectedImage } = this.state;
    const bigImageSrc = imagesArr[0].src;
    let isSelected = '';

    if (selectedImage === bigImageSrc) {
      isSelected = 'selected';
    }

    return (
      <div className="product-image-container">
        <figure className="big-image-container" onClick={this.clickHandler} data-src={bigImageSrc}>
          <img src={bigImageSrc} className={`product-image ${isSelected}`} />
          <div className="image-on-hover"></div>
        </figure>
        <div className="small-images-container">
          {this.renderSmallImages(selectedImage)}
        </div>
      </div>
    );
  }
}


ProductImage.propTypes = {
  imagesArr: PropTypes.array,
};

export default ProductImage;
