import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';
import ScrollToTop from './components/ScrollToTop';

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  app,
  document.querySelector('#root')
);
