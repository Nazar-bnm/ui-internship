import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist } from '../../actions/actionsWishlist';
import ProductOrder from './ProductOrder';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrder);
