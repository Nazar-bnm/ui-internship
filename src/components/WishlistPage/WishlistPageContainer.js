import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist, removeFromWishlist } from '../../actions/actionsWishlist';
import showMessage from '../../actions/actionsNotifications';
import WishlistPage from './WishlistPage';

const mapStateToProps = ({ reducerWishlist, productsReducer }) => ({
  wishlist: reducerWishlist.wishlist,
  products: productsReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WishlistPage);
