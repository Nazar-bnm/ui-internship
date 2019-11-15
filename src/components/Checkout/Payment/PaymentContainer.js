import { connect } from 'react-redux';
import Payment from './Payment';

const mapStateToProps = ({ reducerCart, productsReducer }) => ({
  userCart: reducerCart.userCart,
  products: productsReducer.products,
  totalCount: reducerCart.totalCount
});

export default connect(mapStateToProps)(Payment);
