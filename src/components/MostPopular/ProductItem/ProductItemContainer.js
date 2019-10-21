import { connect } from 'react-redux';
import { addToCart } from '../../../actions/actionsCart';
import ProductItem from './ProductItem';

const mapStateToProps = (state) => ({
  cartItems: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
