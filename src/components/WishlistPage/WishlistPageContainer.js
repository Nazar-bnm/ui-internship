import { connect } from 'react-redux';

import * as actions from '../../actions/actionsWishlist';
import WishlistPage from './WishlistPage';

function mapStateToProps(state) {
  return { wishlist: state.reducerWishlist.wishlist };
}

export default connect(mapStateToProps, actions)(WishlistPage);
