import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import HomePage from '../HomePage';
import ProductDetailsPageWrapper from '../ProductDetailsPage/ProductDetailsPageWrapper';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';
import WhatIsNew from '../WhatIsNew';
import MostPopular from '../MostPopular';
import CartPage from '../CartPage';

import './Routes.scss';

const Routes = () => (
  <Route render={({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={2000}
        classNames="fade"
      >
        <Switch location={location}>
          <DefaultLayout path="/" exact component={HomePage} />
          <DefaultLayout path="/home" component={HomePage} />
          <DefaultLayout path="/WhatIsNew" component={WhatIsNew} />
          <DefaultLayout path="/MostPopular" component={MostPopular} />
          <DefaultLayout path="/cart" component={CartPage} />
          <DefaultLayout path="/products" exact component={ProductDetailsPageWrapper} />
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
