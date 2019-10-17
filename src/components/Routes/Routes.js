import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';
import MostPopular from '../MostPopular';
import ProductListPage from '../ProductListPage';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={HomePage} />
    <DefaultLayout path="/home" component={HomePage} />
    <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
    <DefaultLayout path="/MostPopular" component={MostPopular} />
    <DefaultLayout path="/:category" component={ProductListPage} />
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
