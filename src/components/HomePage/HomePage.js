import React from 'react';

import ProductList from '../ProductList';
import WhatIsNew from '../WhatIsNew';
import BlogArticlePreview from '../BlogArticlePreview';
import MostPopular from '../MostPopular';

const HomePage = () => (
  <div>
    <WhatIsNew />
    <div className="container content">
      <MostPopular />
      <BlogArticlePreview />
    </div>
    <ProductList />
  </div>
);

export default HomePage;
