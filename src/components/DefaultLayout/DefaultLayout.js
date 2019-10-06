import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import ProductImage from '../ProductImage';
import { images } from '../../config/productImageMockups';

const DefaultLayout = ({ component: Component, hideFooter, hideHeader, ...rest }) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <div>
        {!hideHeader && <Header />}
        <Component {...matchProps} />
        <ProductImage imagesArr={ images }/>
        {!hideFooter && <Footer />}
      </div>
    )} />
  );
};

DefaultLayout.propTypes = {
  // Component which displayed as main content
  component: PropTypes.any,
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

export default DefaultLayout;
