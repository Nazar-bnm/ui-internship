import { connect } from 'react-redux';
import { getCartItems } from '../../reducers/reducerCart';
import Header from './Header';
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.5/node_modules/redux';

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
