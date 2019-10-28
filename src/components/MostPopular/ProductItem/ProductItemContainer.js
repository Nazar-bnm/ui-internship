import { connect } from 'react-redux';
import ProductItem from './ProductItem';

const mapStateToProps = (state) => ({
  cartItems: state.cart
});

export default connect(
  mapStateToProps,
)(ProductItem);
