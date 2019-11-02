import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MostPopular from './MostPopular';
import { addToWishlist, removeFromWishlist } from '@/actions/actionsWishlist';

const mapStateToProps = ({ reducerWishlist, productsReducer }) => ({
  wishlist: reducerWishlist.wishlist,
  products: productsReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);
