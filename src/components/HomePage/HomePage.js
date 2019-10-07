import React from 'react';
import Slideshow from './Slideshow';
import { ANIMATION_NAMES } from '../../const';
import { slideData } from './Slideshow/SlideshowDate';

const HomePage = () => (
  <div>
    <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slideData}/>
  </div>
);

export default HomePage;
