import React from 'react';
import Slideshow from './Slideshow';
import Slide from './Slide';
import { ANIMATION_NAMES } from '../../const';
import { slideshowData } from './Slideshow/SlideshowDate';

const slidesData = [];

slideshowData.forEach((el, index) => {
  slidesData[index] = {
    id: el.id,
    img: el.img,
    component: (
      <Slide
        title={el.title}
        description={el.description}
        buttonName={el.buttonName}
      />
    ),
  };
});

const HomePage = () => (
  <div>
    <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
  </div>
);

export default HomePage;
