import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MostPopular from './MostPopular';
import { addToWishlist, removeFromWishlist } from '../../actions/actionsWishlist';

const mapStateToProps = (state) => ({ wishlist: state.reducerWishlist.wishlist });

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MostPopular);
