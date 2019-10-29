import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeQuantity, removeItemFromCart } from '../../actions/actionsCart';
import showMessage from '../../actions/actionsNotifications';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart }) => ({
  userCart: reducerCart.userCart
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
  removeItemFromCart: bindActionCreators(removeItemFromCart, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
