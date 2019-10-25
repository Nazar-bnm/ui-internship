import React from 'react';

import ProductList from '../ProductList';
import Slideshow from './Slideshow';
import Slide from './Slide';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';
import TestModal from '../MostPopular/ProductItem/ProductItem';

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
      <TestModal product={{ id: 2 }} />
      <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
      <ProductList />
    </div>
  );
};

export default HomePage;
