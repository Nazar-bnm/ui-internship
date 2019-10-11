import React from 'react';
import { Switch } from 'react-router-dom';

import CounterContainer from '../../containers/Counter';
import HomePage from '../HomePage';
import ProductDetailsPage from '../../containers/ProductDetailsPage';
import ProductListPage from '../ProductListPage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={HomePage} />
    <DefaultLayout path="/home" component={HomePage} />
    <DefaultLayout path="/products" exact component={ProductListPage} />
    <DefaultLayout path="/products/:id" component={ProductDetailsPage} />
    <DefaultLayout path="/counter" component={CounterContainer} />
    <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
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
