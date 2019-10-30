import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist, removeFromWishlist } from '../../../actions/actionsWishlist';
import showMessage from '../../../actions/actionsNotifications';
import ProductItem from './ProductItem';

const mapStateToProps = ({ reducerWishlist, productsReducer }, state) => ({
  wishlist: reducerWishlist.wishlist,
  products: productsReducer.products,
  cartItems: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
