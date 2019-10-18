import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { addToCart, removeFromCart } from '../../actions/actionsCart';
import CartPage from './index';

const mapStateToProps = ({ reducerCart }) => ({
  cart: reducerCart.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToCart, dispatch),
  removeFromWishlist: bindActionCreators(removeFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
