import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToWishlist } from '../../actions/actionsWishlist';
import showMessage from '../../actions/actionsNotifications';


import ProductDetailsPage from './ProductDetailsPage';

const mapStateToProps = ({ productsReducer }) => ({
  products: productsReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  showMessage: bindActionCreators(showMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
