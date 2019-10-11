import React from 'react';

import ProductList from '../ProductList';
import WhatIsNew from '../WhatIsNew';
import BlogArticlePreview from '../BlogArticlePreview';

const HomePage = () => (
  <div>
    <WhatIsNew />
    <ProductList />
    <BlogArticlePreview />
  </div>
);

export default HomePage;
