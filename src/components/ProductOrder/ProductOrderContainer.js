import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../../actions/actionsCart';
import { addToWishlist } from '../../actions/actionsWishlist';
import ProductOrder from './ProductOrder';
import showMessage from '../../actions/actionsNotifications';

const mapStateToProps = ({ reducerCart, reducerWishlist }) => ({
  wishlist: reducerWishlist.wishlist,
  userCart: reducerCart.userCart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch),
  addToWishlist: bindActionCreators(addToWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrder);
