import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementQuantity, decrementQuantity, removeItemFromCart } from '../../actions/actionsCart';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart }) => ({
  userCart: reducerCart.userCart
});

const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: bindActionCreators(incrementQuantity, dispatch),
  decrementQuantity: bindActionCreators(decrementQuantity, dispatch),
  removeItemFromCart: bindActionCreators(removeItemFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
