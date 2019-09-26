import React, { Component } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

import CounterContainer from '../containers/Counter/CounterContainer';
import HomePage from './HomePage/HomePage';
import ProductDetailsPage from '../containers/ProductDetailsPage/ProductDetailsPage';
import ProductListPage from './ProductListPage/ProductListPage';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
       <CounterContainer/>
        <ul>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/products">Product List Page</Link>
          </li>
        </ul> 
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/products" exact component={ProductListPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

export default App;
