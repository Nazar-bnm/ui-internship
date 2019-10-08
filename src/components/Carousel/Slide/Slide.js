import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';
import cx from 'classnames';

export const CN = 'slide';

class Slide extends Component {
  render() {
    const {
      image,
      name,
      category,
    } = this.props;

    return (
      <div className = {cx(CN)}>
        <img className = {`${CN}__image`} src = {image} />
        <h4 className = {`${CN}__product-name`} >{name}</h4>
        <h5 className = {`${CN}__category`}>{category}</h5>


      </div>
    );
  }
}

Slide.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default Slide;
