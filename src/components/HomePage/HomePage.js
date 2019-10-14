import React from 'react';
import Slideshow from './Slideshow';
import Slide from './Slide';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';

const HomePage = () => {
  const slidesData = slideshowData.map((el) => {
    return {
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

  return (
    <div>
      <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
    </div>
  );
};

export default HomePage;

