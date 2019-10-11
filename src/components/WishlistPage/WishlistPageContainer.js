import { connect } from 'react-redux';
import WishlistPage from './WishlistPage';
import * as actions from '../../actions/actionsWishlist';

function mapStateToProps(state) {
  return { wishlist: state.reducerWishlist.wishlist };
}

export default connect(mapStateToProps, actions)(WishlistPage);
