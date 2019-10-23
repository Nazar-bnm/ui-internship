import React from 'react';

import ProductList from '../ProductList';
import Slideshow from './Slideshow';
import Slide from './Slide';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';
import Preloader from '../Preloader';

const HomePage = () => {
  const slidesData = slideshowData.map((el) => ({
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

  return (
    <div>
      <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
      <ProductList />
      <Preloader />
    </div>
  );
};

export default HomePage;
