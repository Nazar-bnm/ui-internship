import { connect } from 'react-redux';
import { changeSortingOrder, changeOrderType, changeitemsNumberOnPage } from '../../actions/actionsProductList';
import ProductListNavigation from '../../components/ProductList/ProductListNavigation';

const mapStateToProps = (state) => {
  return {
    ascendingOrder: state.reducerProductList.ascendingOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortingOrder: () => dispatch(changeSortingOrder()),
    changeOrderType: (orderType) => dispatch(changeOrderType({ orderType })),
    changeItemsOnPageNum: (chosenItemsOnPage) => dispatch(changeitemsNumberOnPage({ chosenItemsOnPage })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListNavigation);
