import { connect } from 'react-redux';

import YouWillAlsoLove from './YouWillAlsoLove';

const mapStateToProps = ({ reducerCart, productsReducer }) => ({
  userCart: reducerCart.userCart,
  products: productsReducer.products
});

export default connect(mapStateToProps, null)(YouWillAlsoLove);
