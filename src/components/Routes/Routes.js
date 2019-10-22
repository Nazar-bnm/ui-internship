import React from 'react';
import { Switch } from 'react-router-dom';

import HomePageContainer from '../HomePage/HomePageContainer';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';
import WishListPageContainer from '../WishlistPage/WishlistPageContainer';
import MostPopular from '../MostPopular';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={HomePageContainer} />
    <DefaultLayout path="/home" component={HomePageContainer} />
    <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
    <DefaultLayout path="/wishlist" component={WishListPageContainer} />
    <DefaultLayout path="/MostPopular" component={MostPopular} />
    <DefaultLayout
      to="/not_found"
      component={NotFoundPage}
      hideFooter
      hideHeader
      hideBrands
      hideShippingInfo
    />
  </Switch>
);

export default Routes;
