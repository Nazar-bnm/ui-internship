import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeQuantity, removeItemFromCart, setTotalCount } from '../../actions/actionsCart';
import CartPage from './CartPage';

const mapStateToProps = ({ reducerCart, productsReducer, reducerCurr }) => ({
  userCart: reducerCart.userCart,
  products: productsReducer.products,
  currency: reducerCurr.currency,
  currencyKey: reducerCurr.currencyKey,
  symbol: reducerCurr.symbol,
  totalCount: reducerCart.totalCount
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: bindActionCreators(changeQuantity, dispatch),
  removeItemFromCart: bindActionCreators(removeItemFromCart, dispatch),
  setTotalCount: bindActionCreators(setTotalCount, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
