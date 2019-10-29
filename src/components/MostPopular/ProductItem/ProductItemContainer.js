import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist, removeFromWishlist } from '../../../actions/actionsWishlist';
import ProductItem from './ProductItem';

const mapStateToProps = ({ reducerWishlist, productsReducer }, state) => ({
  wishlist: reducerWishlist.wishlist,
  products: productsReducer.products,
  cartItems: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
