import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist, removeFromWishlist } from '../../../actions/actionsWishlist';
import showMessage from '../../../actions/actionsNotifications';
import ProductItem from './ProductItem';

const mapStateToProps = ({ reducerWishlist, reducerCurr }, state) => ({
  wishlist: reducerWishlist.wishlist,
  cartItems: state.cart,
  currency: reducerCurr.currency,
  currencyKey: reducerCurr.currencyKey,
  symbol: reducerCurr.symbol
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
