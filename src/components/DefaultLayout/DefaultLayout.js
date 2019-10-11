import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const DefaultLayout = ({ component: Component, hideFooter, hideHeader, ...rest }) => {
  return (
    <Route {...rest} render={(matchProps) => (
      <>
        {!hideHeader && <Header />}
        <Component {...matchProps} />
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
};

export default DefaultLayout;
