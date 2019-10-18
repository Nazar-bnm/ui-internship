import { connect } from 'react-redux';

import * as actions from '../../actions/actionsWishlist';
import MostPopular from './MostPopular';

function mapStateToProps(state) {
  return { wishlist: state.reducerWishlist.wishlist };
}

export default connect(mapStateToProps, actions)(MostPopular);
