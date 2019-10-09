import React from 'react';
import { Switch } from 'react-router-dom';

import CounterContainer from '../../containers/Counter';
import HomePage from '../HomePage';
import ProductDetailsPage from '../../containers/ProductDetailsPage';
import ProductListPage from '../ProductListPage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';
import WishlistPage from '../WishlistPage';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={HomePage} />
    <DefaultLayout path="/home" component={HomePage} />
    <DefaultLayout path="/products" exact component={ProductListPage} />
    <DefaultLayout path="/products/:id" component={ProductDetailsPage} />
    <DefaultLayout path="/counter" component={CounterContainer} />
    <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
    <DefaultLayout path="/wishlist" component={WishlistPage} />
    <DefaultLayout
      to="/404"
      component={NotFoundPage}
      hideFooter
      hideHeader
    />
  </Switch>
);

export default Routes;
