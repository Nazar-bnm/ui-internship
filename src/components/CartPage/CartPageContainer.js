import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeQuantity, removeItemFromCart, setTotalCount } from '../../actions/actionsCart';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart, productsReducer }) => ({
  userCart: reducerCart.userCart,
  products: productsReducer.products,
  totalCount: reducerCart.userCart.totalCount
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
  removeItemFromCart: bindActionCreators(removeItemFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
