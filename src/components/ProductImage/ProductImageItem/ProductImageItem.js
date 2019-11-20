import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const CN = 'product-image';

class ProductImageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: props.src,
      errored: false
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
      isSelected
    } = this.props;

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
  clickHandler: PropTypes.func.isRequired
};

export default ProductImageItem;
