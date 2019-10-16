import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Brands from '../Brands';
import ShippingInfo from '../ShippingInfo';

const DefaultLayout = ({
  component: Component,
  hideFooter,
  hideHeader,
  hideBrands,
  hideShippingInfo
}) => (
  <Route
    render={() => (
      <>
        {!hideHeader && <Header />}
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
  component: PropTypes.any.isRequired,
  hideFooter: PropTypes.bool.isRequired,
  hideHeader: PropTypes.bool.isRequired,
  hideBrands: PropTypes.bool.isRequired,
  hideShippingInfo: PropTypes.bool.isRequired
};

export default DefaultLayout;
