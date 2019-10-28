import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCartItems } from '../../reducers/reducerCart';

import Header from './Header';

const mapStateToProps = (state) => ({
  cartItems: state.reducerCart.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: bindActionCreators(getCartItems, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
