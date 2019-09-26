import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer'

const DefaultLayout = ({component: Component, hideFooter, hideHeader, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
          {!hideHeader && <Header />}
          <Component {...matchProps} />
          {!hideFooter && <Footer />}
      </div>
    )} />
  )
};

export default DefaultLayout;
