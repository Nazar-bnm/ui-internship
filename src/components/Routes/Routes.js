import React from 'react';
import { Switch } from 'react-router-dom';

import CounterContainer from '../../containers/Counter';
import HomePage from '../HomePage';
import ProductDetailsPageContainer from '../../containers/ProductDetailsPageContainer';
import ProductListPage from '../ProductListPage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';
import MostPopular from '../MostPopular';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={HomePage} />
    <DefaultLayout path="/home" component={HomePage} />
    <DefaultLayout path="/products" exact component={ProductListPage} />
    <DefaultLayout path="/product-details" component={ProductDetailsPageContainer} />
    <DefaultLayout path="/counter" component={CounterContainer} />
    <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
    <DefaultLayout path="/MostPopular" component={MostPopular} />
    <DefaultLayout
      to="/404"
      component={NotFoundPage}
      hideFooter
      hideHeader
      hideBrands
      hideShippingInfo
    />
  </Switch>
);

export default Routes;
