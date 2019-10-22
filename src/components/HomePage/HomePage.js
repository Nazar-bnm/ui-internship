import React, { Component } from 'react';

import ProductList from '../ProductList';
import Slideshow from './Slideshow';
import Slide from './Slide';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';

const category = 'products';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.slidesData = slideshowData.map((el) => ({
      id: el.id,
      img: el.img,
      component: (
        <Slide
          title={el.title}
          description={el.description}
          buttonName={el.buttonName}
        />
      )
    }));

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts(category);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    return (
      <div>
        <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={this.slidesData} />
        <ProductList />
      </div>
    );
  }
}

export default HomePage;
