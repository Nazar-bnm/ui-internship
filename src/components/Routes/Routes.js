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
import WishListPage from '../WishlistPage';
import MostPopular from '../MostPopular';
import CartPage from '../CartPage';
import ProductListPage from '../ProductListPage';

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
          <DefaultLayout path="/product-details/:id" component={ProductDetailsPageWrapper} />
          <DefaultLayout path="/wishlist" component={WishListPage} />
          <DefaultLayout path="/MostPopular" component={MostPopular} />
          <DefaultLayout path="/cart" component={CartPage} />
          {/* <DefaultLayout path="/products/:id" exact component={ProductDetailsPageWrapper} /> */}
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
