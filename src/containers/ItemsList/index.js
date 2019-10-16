import { connect } from 'react-redux';
import ItemsList from '../../components/ProductList/ItemsList';
import { getProductsSuccess, getProductsError } from '../../actions/actionsProductList';

const mapStateToProps = (state) => {
  return {
    ascendingOrder: state.reducerProductList.ascendingOrder,
    orderType: state.reducerProductList.orderType,
    itemsOnPage: Number(state.reducerProductList.chosenItemsOnPage),
    itemList: state.reducerProductList.itemList,
    error: state.reducerProductList.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProductsSuccess: (products) => dispatch(getProductsSuccess(products)),
    onGetProductsError: (error) => dispatch(getProductsError(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
