import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist, removeFromWishlist } from '../../../actions/actionsWishlist';
import showMessage from '../../../actions/actionsNotifications';
import ProductItem from './ProductItem';

const mapStateToProps = ({ reducerWishlist }, state) => ({
  wishlist: reducerWishlist.wishlist,
  cartItems: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
