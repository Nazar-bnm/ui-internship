import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import HomePage from '../HomePage';
import ProductDetailsPage from '../ProductDetailsPage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WishListPage from '../WishlistPage';
import MostPopular from '../MostPopular';
import CartPage from '../CartPage';
import ProductListPage from '../ProductListPage';
import WhatIsNew from '../WhatIsNew';

import './Routes.scss';

const Routes = () => (
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={2000}
        classNames="fade"
      >
        <Switch>
          <DefaultLayout path="/" exact component={HomePage} />
          <DefaultLayout path="/home" component={HomePage} />
          <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
          <DefaultLayout path="/product-details/:id" component={ProductDetailsPage} />
          <DefaultLayout path="/wishlist" component={WishListPage} />
          <DefaultLayout path="/MostPopular" component={MostPopular} />
          <DefaultLayout path="/cart" component={CartPage} />
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
      </CSSTransition>
    </TransitionGroup>
  )}
  />
);

export default Routes;
