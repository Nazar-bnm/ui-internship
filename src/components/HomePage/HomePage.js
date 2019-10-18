import React from 'react';

import WhatIsNew from '../WhatIsNew';
import BlogArticlePreview from '../BlogArticlePreview';

import './HomePage.scss';

const HomePage = () => (
  <div>
    <WhatIsNew />
    <div className="container content mainPage">
      <div className="mainPage__popular" />
      <div className="mainPage__blog">
        <BlogArticlePreview />
      </div>
    </div>
  </div>
);

export default HomePage;
