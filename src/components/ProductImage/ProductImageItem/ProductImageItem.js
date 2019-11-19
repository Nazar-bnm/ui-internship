import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ProductImageItem.scss';

export const CN = 'product-image';

class ProductImageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: props.src,
      errored: false,
      isSelected: ''
    };

    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageError() {
    const { errored } = this.state;
    if (!errored) {
      this.setState({
        imgSrc: 'src/assets/img/productListPage/no-image.jpeg',
        errored: true
      });
    }
  }

  render() {
    const {
      keyForChild,
      clickHandler,
      // isSelected,
      selectedImage,
      src
    } = this.props;

    // let { isSelected } = this.props;


    const isSelected = selectedImage === src;


    const { imgSrc } = this.state;
    return (
      <div className={`${CN}__small-image`} key={keyForChild}>
        <img
          className={cx(CN, { 'product-image__selected-image': isSelected })}
          alt="product"
          onError={this.handleImageError}
          src={imgSrc}
        />
        <button
          className={`${CN}__image-on-hover`}
          data-src={imgSrc}
          onClick={clickHandler}
          onError={this.handleImageError}
          type="submit"
          label="clickable image"
        />
      </div>
    );
  }
}

ProductImageItem.propTypes = {
  src: PropTypes.string.isRequired,
  keyForChild: PropTypes.string.isRequired,
  // isSelected: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default ProductImageItem;
