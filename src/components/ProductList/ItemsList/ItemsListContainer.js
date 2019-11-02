import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemsList from './ItemsList';
import { getProductsSuccess, getProductsError } from '@/actions/actionsProductList';

const mapStateToProps = (state) => ({
  ascendingOrder: state.reducerProductList.ascendingOrder,
  error: state.reducerProductList.error,
  itemsOnPage: Number(state.reducerProductList.chosenItemsOnPage),
  itemList: state.reducerProductList.itemList,
  orderType: state.reducerProductList.orderType
});
const mapDispatchToProps = (dispatch) => ({
  onGetProductsSuccess: bindActionCreators(getProductsSuccess, dispatch),
  onGetProductsError: bindActionCreators(getProductsError, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
