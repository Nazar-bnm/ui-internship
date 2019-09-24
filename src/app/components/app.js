import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from '../containers/HomePage/HomePage';
import ProductDetailsPage from '../containers/ProductListPage/ProductDetailsPage/ProductDetailsPage';
import ProductListPage from '../containers/ProductListPage/ProductListPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/products">Product List Page</Link>
          </li>
        </ul> 
        
        
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/products" component={ProductListPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}
