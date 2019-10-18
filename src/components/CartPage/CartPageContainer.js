import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, removeFromCart } from '../../actions/actionsCart';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart }) => ({
  cart: reducerCart.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
