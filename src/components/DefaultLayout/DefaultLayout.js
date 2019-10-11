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
  hideShippingInfo, ...rest
}) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <>
        {!hideHeader && <Header />}
        <Component {...matchProps} />
        {!hideBrands && <Brands />}
        {!hideShippingInfo && <ShippingInfo />}
        {!hideFooter && <Footer />}
      </>
    )} />
  );
};

DefaultLayout.propTypes = {
  // Component which displayed as main content
  component: PropTypes.any,
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
  hideBrands: PropTypes.bool,
  hideShippingInfo: PropTypes.bool,
};

export default DefaultLayout;
