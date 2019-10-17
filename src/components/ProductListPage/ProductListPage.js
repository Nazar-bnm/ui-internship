import React, { Component } from 'react';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

class ProductListPage extends Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props', props.match.url);
  }

  render() {
    return (
      <div>
        something
      </div>
    );
  }
}
export default ProductListPage;
