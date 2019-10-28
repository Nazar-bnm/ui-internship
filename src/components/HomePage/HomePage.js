import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import WhatIsNew from '../WhatIsNew';
import BlogArticlePreview from '../BlogArticlePreview';
import MostPopular from '../MostPopular';
import Slideshow from './Slideshow';
import Slide from './Slide';
import Heading from '../Heading';
import { ANIMATION_NAMES } from '../../constants/SlideshowConst';
import { slideshowData } from './Slideshow/SlideshowDate';

import './HomePage.scss';

const CN = 'homepage';

const HomePage = ({ className }) => {
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
    <div className={cx(CN, className)}>
      <Slideshow animation={ANIMATION_NAMES.ZOOM_IN} slideData={slidesData} />
      <div>
        <WhatIsNew />
        <div className="container content mainPage">
          <div className="mainPage__popular">
            <Heading title="most popular" position="center" />
            <MostPopular />
          </div>
          <div className="mainPage__blog">
            <BlogArticlePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  className: PropTypes.string
};

HomePage.defaultProps = {
  className: ''
};

export default HomePage;
