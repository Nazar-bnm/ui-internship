import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import PropTypes from 'prop-types';

import CounterContainer from '../../containers/Counter';
import HomePage from '../HomePage';
import ProductDetailsPage from '../../containers/ProductDetailsPage';
import ProductListPage from '../ProductListPage';
import NotFoundPage from '../NotFoundPage';
import DefaultLayout from '../DefaultLayout';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <DefaultLayout path="/"
            render={() => (<HomePage cookies={this.props.cookies}/>)}
            exact component={HomePage} />
          <DefaultLayout path="/home" component={HomePage} />
          <DefaultLayout path="/products" exact component={ProductListPage} />
          <DefaultLayout path="/products/:id" component={ProductDetailsPage} />
          <DefaultLayout path="/counter" component={CounterContainer} />
          <DefaultLayout
            to="/404"
            component={NotFoundPage}
            hideFooter
            hideHeader
          />
        </Switch>
      </div>
    );
  }
}

Routes.propTypes = {
  // Component which displayed as main content
  cookies: PropTypes.object,
};

export default withCookies(Routes);
