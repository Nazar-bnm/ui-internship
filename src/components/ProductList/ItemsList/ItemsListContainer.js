import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemsList from './ItemsList';
import { getProductsSuccess, getProductsError } from '../../../actions/actionsProductList';
import { addToWishlist, removeFromWishlist } from '../../../actions/actionsWishlist';

const mapStateToProps = (state) => ({
  ascendingOrder: state.reducerProductList.ascendingOrder,
  error: state.reducerProductList.error,
  itemsOnPage: Number(state.reducerProductList.chosenItemsOnPage),
  itemList: state.reducerProductList.itemList,
  orderType: state.reducerProductList.orderType,
  wishlist: state.reducerWishlist.wishlist,
  filters: state.reducerFilter,
});
const mapDispatchToProps = (dispatch) => ({
  onGetProductsSuccess: bindActionCreators(getProductsSuccess, dispatch),
  onGetProductsError: bindActionCreators(getProductsError, dispatch),
  addToWishlist: bindActionCreators(addToWishlist, dispatch),
  removeFromWishlist: bindActionCreators(removeFromWishlist, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
