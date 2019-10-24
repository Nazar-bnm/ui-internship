import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import Brands from '../Brands';
import ShippingInfo from '../ShippingInfo';
import Notifications from '../Shared/Notifications';

import './DefaultLayout.scss';

const DefaultLayout = ({
  component: Component,
  // notifications: Notifications,
  hideFooter,
  hideHeader,
  hideBrands,
  hideShippingInfo
}) => (
  <Route
    render={() => (
      <>
        {!hideHeader && <Header />}
        <Notifications
          type="success"
          showCloseButton={() => { }}
          onRequestHide={() => { }}
        />
        <Component />
        {!hideBrands && <Brands />}
        {!hideShippingInfo && <ShippingInfo />}
        {!hideFooter && <Footer />}
      </>
    )}
  />
);

DefaultLayout.propTypes = {
  // Component which displayed as main content
  // Notifications: PropTypes.any,
  component: PropTypes.any,
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideBrands: PropTypes.bool,
  hideShippingInfo: PropTypes.bool
};

DefaultLayout.defaultProps = {
  component: null,
  hideFooter: false,
  hideHeader: false,
  hideBrands: false,
  hideShippingInfo: false
};

export default DefaultLayout;
