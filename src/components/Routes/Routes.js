import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import HomePage from '../HomePage';
import ProductDetailsPageWrapper from '../ProductDetailsPage/ProductDetailsPageWrapper';
import NotFoundPage from '../NotFoundPage';
import DefaultLayoutContainer from '../DefaultLayout/DefaultLayoutContainer';
import WhatIsNew from '../WhatIsNew';
import WishListPageContainer from '../WishlistPage/WishlistPageContainer';
import MostPopular from '../MostPopular';

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
          <DefaultLayoutContainer path="/" exact component={HomePage} />
          <DefaultLayoutContainer path="/home" component={HomePage} />
          <DefaultLayoutContainer path="/product-details" component={ProductDetailsPageWrapper} />
          <DefaultLayoutContainer path="/WhatIsNew" component={WhatIsNew} />
          <DefaultLayoutContainer path="/wishlist" component={WishListPageContainer} />
          <DefaultLayoutContainer path="/MostPopular" component={MostPopular} />
          <DefaultLayoutContainer
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
