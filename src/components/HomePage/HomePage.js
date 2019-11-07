import React from 'react';

import WhatIsNew from '../WhatIsNew';
import BlogArticlePreview from '../BlogArticlePreview';
import MostPopular from '../MostPopular';
import Slideshow from './Slideshow';
import Slide from './Slide';
import Heading from '../Heading';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';
import Preloader from '../Preloader';

import './HomePage.scss';

const CN = 'homepage';

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
    <div className={CN}>
      <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
      <WhatIsNew />
      <div className="container content mainPage">
        <div className="mainPage__popular">
          <Heading title="most popular" position="center" />
          <MostPopular />
          <Preloader />
        </div>
        <div className="mainPage__blog">
          <BlogArticlePreview />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
